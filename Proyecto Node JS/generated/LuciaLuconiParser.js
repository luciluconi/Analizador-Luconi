// Generated from c:/Users/lucil/Desktop/ANALIZADOR_LuciaLuconi - copia/LuciaLuconi.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LuciaLuconiListener from './LuciaLuconiListener.js';
import LuciaLuconiVisitor from './LuciaLuconiVisitor.js';

const serializedATN = [4,1,11,44,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,20,8,1,10,1,12,1,23,9,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,3,5,3,32,8,3,10,3,12,3,35,9,3,1,4,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,8,10,39,0,12,1,0,0,0,2,21,1,0,0,0,4,24,
1,0,0,0,6,33,1,0,0,0,8,36,1,0,0,0,10,41,1,0,0,0,12,13,5,1,0,0,13,14,5,7,
0,0,14,15,5,4,0,0,15,16,3,2,1,0,16,17,5,5,0,0,17,1,1,0,0,0,18,20,3,4,2,0,
19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,3,1,0,0,0,23,
21,1,0,0,0,24,25,5,2,0,0,25,26,5,7,0,0,26,27,5,4,0,0,27,28,3,6,3,0,28,29,
5,5,0,0,29,5,1,0,0,0,30,32,3,8,4,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,
0,0,33,34,1,0,0,0,34,7,1,0,0,0,35,33,1,0,0,0,36,37,5,7,0,0,37,38,5,3,0,0,
38,39,3,10,5,0,39,40,5,6,0,0,40,9,1,0,0,0,41,42,7,0,0,0,42,11,1,0,0,0,2,
21,33];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LuciaLuconiParser extends antlr4.Parser {

    static grammarFileName = "LuciaLuconi.g4";
    static literalNames = [ null, "'configuraci\\u00F3n'", "'secci\\u00F3n'", 
                            "'='", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "CONFIGURACION", "SECCION", "IGUAL", 
                             "LLAVE_ABRE", "LLAVE_CIERRA", "PUNTO_Y_COMA", 
                             "NOMBRE", "NUMERO", "CADENA", "BOOLEANO", "WS" ];
    static ruleNames = [ "configuracion", "secciones", "seccion", "parametros", 
                         "parametro", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LuciaLuconiParser.ruleNames;
        this.literalNames = LuciaLuconiParser.literalNames;
        this.symbolicNames = LuciaLuconiParser.symbolicNames;
    }



	configuracion() {
	    let localctx = new ConfiguracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LuciaLuconiParser.RULE_configuracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(LuciaLuconiParser.CONFIGURACION);
	        this.state = 13;
	        this.match(LuciaLuconiParser.NOMBRE);
	        this.state = 14;
	        this.match(LuciaLuconiParser.LLAVE_ABRE);
	        this.state = 15;
	        this.secciones();
	        this.state = 16;
	        this.match(LuciaLuconiParser.LLAVE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	secciones() {
	    let localctx = new SeccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LuciaLuconiParser.RULE_secciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 18;
	            this.seccion();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seccion() {
	    let localctx = new SeccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LuciaLuconiParser.RULE_seccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(LuciaLuconiParser.SECCION);
	        this.state = 25;
	        this.match(LuciaLuconiParser.NOMBRE);
	        this.state = 26;
	        this.match(LuciaLuconiParser.LLAVE_ABRE);
	        this.state = 27;
	        this.parametros();
	        this.state = 28;
	        this.match(LuciaLuconiParser.LLAVE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LuciaLuconiParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 30;
	            this.parametro();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LuciaLuconiParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(LuciaLuconiParser.NOMBRE);
	        this.state = 37;
	        this.match(LuciaLuconiParser.IGUAL);
	        this.state = 38;
	        this.valor();
	        this.state = 39;
	        this.match(LuciaLuconiParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LuciaLuconiParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LuciaLuconiParser.EOF = antlr4.Token.EOF;
LuciaLuconiParser.CONFIGURACION = 1;
LuciaLuconiParser.SECCION = 2;
LuciaLuconiParser.IGUAL = 3;
LuciaLuconiParser.LLAVE_ABRE = 4;
LuciaLuconiParser.LLAVE_CIERRA = 5;
LuciaLuconiParser.PUNTO_Y_COMA = 6;
LuciaLuconiParser.NOMBRE = 7;
LuciaLuconiParser.NUMERO = 8;
LuciaLuconiParser.CADENA = 9;
LuciaLuconiParser.BOOLEANO = 10;
LuciaLuconiParser.WS = 11;

LuciaLuconiParser.RULE_configuracion = 0;
LuciaLuconiParser.RULE_secciones = 1;
LuciaLuconiParser.RULE_seccion = 2;
LuciaLuconiParser.RULE_parametros = 3;
LuciaLuconiParser.RULE_parametro = 4;
LuciaLuconiParser.RULE_valor = 5;

class ConfiguracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuciaLuconiParser.RULE_configuracion;
    }

	CONFIGURACION() {
	    return this.getToken(LuciaLuconiParser.CONFIGURACION, 0);
	};

	NOMBRE() {
	    return this.getToken(LuciaLuconiParser.NOMBRE, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(LuciaLuconiParser.LLAVE_ABRE, 0);
	};

	secciones() {
	    return this.getTypedRuleContext(SeccionesContext,0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(LuciaLuconiParser.LLAVE_CIERRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.enterConfiguracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.exitConfiguracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LuciaLuconiVisitor ) {
	        return visitor.visitConfiguracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuciaLuconiParser.RULE_secciones;
    }

	seccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionContext);
	    } else {
	        return this.getTypedRuleContext(SeccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.enterSecciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.exitSecciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LuciaLuconiVisitor ) {
	        return visitor.visitSecciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuciaLuconiParser.RULE_seccion;
    }

	SECCION() {
	    return this.getToken(LuciaLuconiParser.SECCION, 0);
	};

	NOMBRE() {
	    return this.getToken(LuciaLuconiParser.NOMBRE, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(LuciaLuconiParser.LLAVE_ABRE, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(LuciaLuconiParser.LLAVE_CIERRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.enterSeccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.exitSeccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LuciaLuconiVisitor ) {
	        return visitor.visitSeccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuciaLuconiParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LuciaLuconiVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuciaLuconiParser.RULE_parametro;
    }

	NOMBRE() {
	    return this.getToken(LuciaLuconiParser.NOMBRE, 0);
	};

	IGUAL() {
	    return this.getToken(LuciaLuconiParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(LuciaLuconiParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LuciaLuconiVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuciaLuconiParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(LuciaLuconiParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(LuciaLuconiParser.CADENA, 0);
	};

	BOOLEANO() {
	    return this.getToken(LuciaLuconiParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuciaLuconiListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LuciaLuconiVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LuciaLuconiParser.ConfiguracionContext = ConfiguracionContext; 
LuciaLuconiParser.SeccionesContext = SeccionesContext; 
LuciaLuconiParser.SeccionContext = SeccionContext; 
LuciaLuconiParser.ParametrosContext = ParametrosContext; 
LuciaLuconiParser.ParametroContext = ParametroContext; 
LuciaLuconiParser.ValorContext = ValorContext; 
