// Generated from c:/Users/lucil/Desktop/ANALIZADOR_LuciaLuconi - copia/LuciaLuconi.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,102,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,5,6,56,8,6,10,6,12,6,59,9,6,1,7,
4,7,62,8,7,11,7,12,7,63,1,8,1,8,1,8,1,8,1,8,5,8,71,8,8,10,8,12,8,74,9,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
3,9,94,8,9,1,10,4,10,97,8,10,11,10,12,10,98,1,10,1,10,1,72,0,11,1,1,3,2,
5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,4,2,0,65,90,97,122,3,0,48,
57,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,106,0,1,1,0,0,0,0,3,1,0,0,
0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,37,1,0,0,0,5,45,
1,0,0,0,7,47,1,0,0,0,9,49,1,0,0,0,11,51,1,0,0,0,13,53,1,0,0,0,15,61,1,0,
0,0,17,65,1,0,0,0,19,93,1,0,0,0,21,96,1,0,0,0,23,24,5,99,0,0,24,25,5,111,
0,0,25,26,5,110,0,0,26,27,5,102,0,0,27,28,5,105,0,0,28,29,5,103,0,0,29,30,
5,117,0,0,30,31,5,114,0,0,31,32,5,97,0,0,32,33,5,99,0,0,33,34,5,105,0,0,
34,35,5,243,0,0,35,36,5,110,0,0,36,2,1,0,0,0,37,38,5,115,0,0,38,39,5,101,
0,0,39,40,5,99,0,0,40,41,5,99,0,0,41,42,5,105,0,0,42,43,5,243,0,0,43,44,
5,110,0,0,44,4,1,0,0,0,45,46,5,61,0,0,46,6,1,0,0,0,47,48,5,123,0,0,48,8,
1,0,0,0,49,50,5,125,0,0,50,10,1,0,0,0,51,52,5,59,0,0,52,12,1,0,0,0,53,57,
7,0,0,0,54,56,7,1,0,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,
0,0,0,58,14,1,0,0,0,59,57,1,0,0,0,60,62,7,2,0,0,61,60,1,0,0,0,62,63,1,0,
0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,16,1,0,0,0,65,66,5,39,0,0,66,67,5,39,
0,0,67,68,5,39,0,0,68,72,1,0,0,0,69,71,9,0,0,0,70,69,1,0,0,0,71,74,1,0,0,
0,72,73,1,0,0,0,72,70,1,0,0,0,73,75,1,0,0,0,74,72,1,0,0,0,75,76,5,39,0,0,
76,77,5,39,0,0,77,78,5,39,0,0,78,18,1,0,0,0,79,80,5,118,0,0,80,81,5,101,
0,0,81,82,5,114,0,0,82,83,5,100,0,0,83,84,5,97,0,0,84,85,5,100,0,0,85,86,
5,101,0,0,86,87,5,114,0,0,87,94,5,111,0,0,88,89,5,102,0,0,89,90,5,97,0,0,
90,91,5,108,0,0,91,92,5,115,0,0,92,94,5,111,0,0,93,79,1,0,0,0,93,88,1,0,
0,0,94,20,1,0,0,0,95,97,7,3,0,0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,
0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,6,10,0,0,101,22,1,0,0,0,6,0,57,63,
72,93,98,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LuciaLuconiLexer extends antlr4.Lexer {

    static grammarFileName = "LuciaLuconi.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'configuraci\\u00F3n'", "'secci\\u00F3n'", 
                         "'='", "'{'", "'}'", "';'" ];
	static symbolicNames = [ null, "CONFIGURACION", "SECCION", "IGUAL", "LLAVE_ABRE", 
                          "LLAVE_CIERRA", "PUNTO_Y_COMA", "NOMBRE", "NUMERO", 
                          "CADENA", "BOOLEANO", "WS" ];
	static ruleNames = [ "CONFIGURACION", "SECCION", "IGUAL", "LLAVE_ABRE", 
                      "LLAVE_CIERRA", "PUNTO_Y_COMA", "NOMBRE", "NUMERO", 
                      "CADENA", "BOOLEANO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LuciaLuconiLexer.EOF = antlr4.Token.EOF;
LuciaLuconiLexer.CONFIGURACION = 1;
LuciaLuconiLexer.SECCION = 2;
LuciaLuconiLexer.IGUAL = 3;
LuciaLuconiLexer.LLAVE_ABRE = 4;
LuciaLuconiLexer.LLAVE_CIERRA = 5;
LuciaLuconiLexer.PUNTO_Y_COMA = 6;
LuciaLuconiLexer.NOMBRE = 7;
LuciaLuconiLexer.NUMERO = 8;
LuciaLuconiLexer.CADENA = 9;
LuciaLuconiLexer.BOOLEANO = 10;
LuciaLuconiLexer.WS = 11;



