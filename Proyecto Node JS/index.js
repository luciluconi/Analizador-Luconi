import LuciaLuconiLexer from "./generated/LuciaLuconiLexer.js";
import LuciaLuconiParser from "./generated/LuciaLuconiParser.js";
import { CustomLuciaLuconiListener } from "./CustomLuciaLuconiListener.js";
import { CustomLuciaLuconiVisitor } from "./CustomLuciaLuconiVisitor.js";
import antlr4 from "antlr4";
import { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import fs from "fs";
import readline from "readline";

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch {
        input = await leerCadena();
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new LuciaLuconiLexer(inputStream);

    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            console.error(`❌ Error léxico en línea ${line}:${column} -> ${msg}`);
        }
    });

    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LuciaLuconiParser(tokenStream);

    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
            console.error(`❌ Error sintáctico en línea ${line}:${column} -> ${msg}`);
        }
    });

    // Tabla de tokens prolija
    tokenStream.fill();
    const tokenData = tokenStream.tokens
    .filter(token => token.channel === 0 && token.type !== antlr4.Token.EOF)
    .map(token => {
        const tokenName = LuciaLuconiLexer.symbolicNames[token.type] || `'${token.text}'`;
        return {
            Lexema: token.text,
            Token: tokenName,
            Línea: token.line,
            Columna: token.column
        };
    });


    console.log("\n══════════════════════════════════════");
    console.log("📑 Tabla de Lexemas y Tokens");
    console.log("══════════════════════════════════════");
    console.table(tokenData);

    const tree = parser.configuracion();

    console.log("\n══════════════════════════════════════");
    console.log("🌳 Árbol de Análisis Sintáctico");
    console.log("══════════════════════════════════════");
   console.log(tree.toStringTree(parser.ruleNames));

console.log("\n══════════════════════════════════════");
console.log("🔍 Recorrido del árbol con Listener");
console.log("══════════════════════════════════════");

const walker = new ParseTreeWalker();
const listener = new CustomLuciaLuconiListener(lexer);
walker.walk(listener, tree);


    const visitor = new CustomLuciaLuconiVisitor();
    const resultado = visitor.visit(tree);

    console.log("\n══════════════════════════════════════");
    console.log("📜 Traducción a JavaScript");
    console.log("══════════════════════════════════════");
    console.log(resultado.codigoJS);

    console.log("\n══════════════════════════════════════");
    console.log("🧠 Interpretación del Código");
    console.log("══════════════════════════════════════");
    console.dir(resultado.resultadoEjecucion, { depth: null });
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
