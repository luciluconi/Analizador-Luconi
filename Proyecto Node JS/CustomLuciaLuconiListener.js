import LuciaLuconiListener from "./generated/LuciaLuconiListener.js";
import antlr4 from "antlr4";

export class CustomLuciaLuconiListener extends LuciaLuconiListener {
    constructor(lexer) {
        super();
        this.lexer = lexer;
    }

    visitTerminal(node) {
        const token = node.symbol;
        const tipo = this.lexer.symbolicNames?.[token.type] || `TOKEN_${token.type}`;
        console.log(`✔️ Token encontrado: ${token.text} -> ${tipo}`);
    }



    enterConfiguracion(ctx) {
        const nombre = ctx.NOMBRE().getText();
        console.log(`✔️ Configuración detectada: ${nombre}`);
    }

    enterSeccion(ctx) {
        const nombre = ctx.NOMBRE().getText();
        console.log(`📁 Sección detectada: ${nombre}`);
    }

    enterParametro(ctx) {
        const nombre = ctx.NOMBRE().getText();
        const valor = ctx.valor().getText();
        console.log(`📌 Parámetro: ${nombre} = ${valor}`);
    }

    enterValor(ctx) {
        console.log(`↪ Valor detectado: ${ctx.getText()}`);
    }

    enterCadena(ctx) {
        console.log(`💬 Cadena detectada: ${ctx.getText()}`);
    }

    enterNumero(ctx) {
        console.log(`🔢 Número detectado: ${ctx.getText()}`);
    }

    enterBooleano(ctx) {
        console.log(`🔘 Booleano detectado: ${ctx.getText()}`);
    }

    // Mostrar tabla de tokens al final
    imprimirTablaTokens() {
        console.log("\n🧾 Tabla de lexemas y tokens:");
        console.table(this.lexemasTokens);
    }

    // Mostrar árbol sintáctico
    mostrarArbol(tree, parser) {
        console.log("\n🌳 Árbol de análisis sintáctico:");
        const str = tree.toStringTree(parser.ruleNames);
        console.log(str);
    }

    // Agrega este manejador estático a tu parser para detectar errores
    static configurarErrores(parser) {
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
                console.error(`❌ Error en línea ${line}:${column} - ${msg}`);
            }
        });
    }
}
