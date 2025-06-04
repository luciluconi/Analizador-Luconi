import LuciaLuconiVisitor from "./generated/LuciaLuconiVisitor.js";

export class CustomLuciaLuconiVisitor extends LuciaLuconiVisitor {

    constructor() {
        super();
        this.tokens = [];
    }

    agregarToken(terminalNode) {
        const token = terminalNode.symbol;
        const tipo = terminalNode.parser?.symbolicNames?.[token.type] || `TOKEN_${token.type}`;
        this.tokens.push({
            lexema: token.text,
            token: tipo
        });
    }

    visitConfiguracion(ctx) {
    this.agregarToken(ctx.NOMBRE());

    const nombre = ctx.NOMBRE().getText();
    const secciones = ctx.secciones()
        ? this.visit(ctx.secciones())
        : [];

    // Formato solicitado por tu profesora
    const resultadoEjecucion = {
        nombre,
        secciones: secciones.map(sec => ({
            nombre: sec.nombre,
            parametros: sec.parametros.map(p => ({
                clave: p.nombre,
                valor: p.valor
            }))
        }))
    };

    // Generar string de JS como pide la consigna
    const jsonPretty = JSON.stringify(resultadoEjecucion, null, 2);
    const codigoJS = `const configuracion = ${jsonPretty};`;

    return {
        tipo: 'configuracion',
        nombre,
        secciones,
        codigoJS,
        resultadoEjecucion
    };
}

    visitSecciones(ctx) {
        return ctx.seccion().map(seccionCtx => this.visit(seccionCtx));
    }

    visitSeccion(ctx) {
        this.agregarToken(ctx.NOMBRE());

        const nombre = ctx.NOMBRE().getText();
        const parametros = ctx.parametros()
            ? this.visit(ctx.parametros())
            : [];

        return {
            tipo: 'seccion',
            nombre,
            parametros
        };
    }

    visitParametros(ctx) {
        return ctx.parametro().map(p => this.visit(p));
    }

    visitParametro(ctx) {
        this.agregarToken(ctx.NOMBRE());
        this.agregarToken(ctx.children[1]); // '='
        const valor = this.visit(ctx.valor());
        this.agregarToken(ctx.children[3]); // ';'

        return {
            nombre: ctx.NOMBRE().getText(),
            valor
        };
    }

    visitValor(ctx) {
        if (ctx.NUMERO()) {
            this.agregarToken(ctx.NUMERO());
            return parseInt(ctx.NUMERO().getText());
        } else if (ctx.CADENA()) {
            this.agregarToken(ctx.CADENA());
            const texto = ctx.CADENA().getText();
            return texto.slice(3, -3); // eliminar triple comilla
        } else if (ctx.BOOLEANO()) {
            this.agregarToken(ctx.BOOLEANO());
            return ctx.BOOLEANO().getText() === "verdadero";
        }
        return null;
    }

    imprimirTablaTokens() {
        console.log("\n🧾 Tabla de lexemas y tokens:");
        console.table(this.tokens);
    }

    mostrarArbol(tree, parser) {
        console.log("\n🌳 Árbol de análisis sintáctico:");
        const str = tree.toStringTree(parser.ruleNames);
        console.log(str);
    }

    static configurarErrores(parser) {
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
                console.error(`❌ Error en línea ${line}:${column} - ${msg}`);
            }
        });
    }
}
