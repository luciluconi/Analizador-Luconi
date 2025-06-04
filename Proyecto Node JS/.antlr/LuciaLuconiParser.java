// Generated from c:/Users/lucil/Desktop/lucialuconi.ananalizador/ssl-antlr-calculator/LuciaLuconi.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LuciaLuconiParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, NOMBRE=7, NUMERO=8, CADENA=9, 
		BOOLEANO=10, WS=11;
	public static final int
		RULE_configuracion = 0, RULE_secciones = 1, RULE_seccion = 2, RULE_parametros = 3, 
		RULE_parametro = 4, RULE_valor = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"configuracion", "secciones", "seccion", "parametros", "parametro", "valor"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'configuraci\\u00F3n'", "'{'", "'}'", "'secci\\u00F3n'", "'='", 
			"';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "NOMBRE", "NUMERO", "CADENA", 
			"BOOLEANO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LuciaLuconi.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LuciaLuconiParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConfiguracionContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(LuciaLuconiParser.NOMBRE, 0); }
		public SeccionesContext secciones() {
			return getRuleContext(SeccionesContext.class,0);
		}
		public ConfiguracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_configuracion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).enterConfiguracion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).exitConfiguracion(this);
		}
	}

	public final ConfiguracionContext configuracion() throws RecognitionException {
		ConfiguracionContext _localctx = new ConfiguracionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_configuracion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			match(T__0);
			setState(13);
			match(NOMBRE);
			setState(14);
			match(T__1);
			setState(16);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(15);
				secciones();
				}
				break;
			}
			setState(18);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeccionesContext extends ParserRuleContext {
		public List<SeccionContext> seccion() {
			return getRuleContexts(SeccionContext.class);
		}
		public SeccionContext seccion(int i) {
			return getRuleContext(SeccionContext.class,i);
		}
		public SeccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).enterSecciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).exitSecciones(this);
		}
	}

	public final SeccionesContext secciones() throws RecognitionException {
		SeccionesContext _localctx = new SeccionesContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_secciones);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(20);
				seccion();
				}
				}
				setState(25);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeccionContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(LuciaLuconiParser.NOMBRE, 0); }
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public SeccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).enterSeccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).exitSeccion(this);
		}
	}

	public final SeccionContext seccion() throws RecognitionException {
		SeccionContext _localctx = new SeccionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_seccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			match(T__3);
			setState(27);
			match(NOMBRE);
			setState(28);
			match(T__1);
			setState(30);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(29);
				parametros();
				}
				break;
			}
			setState(32);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametrosContext extends ParserRuleContext {
		public List<ParametroContext> parametro() {
			return getRuleContexts(ParametroContext.class);
		}
		public ParametroContext parametro(int i) {
			return getRuleContext(ParametroContext.class,i);
		}
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).enterParametros(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).exitParametros(this);
		}
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_parametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NOMBRE) {
				{
				{
				setState(34);
				parametro();
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametroContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(LuciaLuconiParser.NOMBRE, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public ParametroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametro; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).enterParametro(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).exitParametro(this);
		}
	}

	public final ParametroContext parametro() throws RecognitionException {
		ParametroContext _localctx = new ParametroContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_parametro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(NOMBRE);
			setState(41);
			match(T__4);
			setState(42);
			valor();
			setState(43);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public TerminalNode NUMERO() { return getToken(LuciaLuconiParser.NUMERO, 0); }
		public TerminalNode CADENA() { return getToken(LuciaLuconiParser.CADENA, 0); }
		public TerminalNode BOOLEANO() { return getToken(LuciaLuconiParser.BOOLEANO, 0); }
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).enterValor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LuciaLuconiListener ) ((LuciaLuconiListener)listener).exitValor(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_valor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1792L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000b0\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003"+
		"\u0000\u0011\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0005\u0001\u0016"+
		"\b\u0001\n\u0001\f\u0001\u0019\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002\u001f\b\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0005\u0003$\b\u0003\n\u0003\f\u0003\'\t\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0000\u0000\u0006\u0000\u0002\u0004\u0006\b\n\u0000\u0001\u0001\u0000"+
		"\b\n-\u0000\f\u0001\u0000\u0000\u0000\u0002\u0017\u0001\u0000\u0000\u0000"+
		"\u0004\u001a\u0001\u0000\u0000\u0000\u0006%\u0001\u0000\u0000\u0000\b"+
		"(\u0001\u0000\u0000\u0000\n-\u0001\u0000\u0000\u0000\f\r\u0005\u0001\u0000"+
		"\u0000\r\u000e\u0005\u0007\u0000\u0000\u000e\u0010\u0005\u0002\u0000\u0000"+
		"\u000f\u0011\u0003\u0002\u0001\u0000\u0010\u000f\u0001\u0000\u0000\u0000"+
		"\u0010\u0011\u0001\u0000\u0000\u0000\u0011\u0012\u0001\u0000\u0000\u0000"+
		"\u0012\u0013\u0005\u0003\u0000\u0000\u0013\u0001\u0001\u0000\u0000\u0000"+
		"\u0014\u0016\u0003\u0004\u0002\u0000\u0015\u0014\u0001\u0000\u0000\u0000"+
		"\u0016\u0019\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000\u0000\u0000"+
		"\u0017\u0018\u0001\u0000\u0000\u0000\u0018\u0003\u0001\u0000\u0000\u0000"+
		"\u0019\u0017\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0004\u0000\u0000"+
		"\u001b\u001c\u0005\u0007\u0000\u0000\u001c\u001e\u0005\u0002\u0000\u0000"+
		"\u001d\u001f\u0003\u0006\u0003\u0000\u001e\u001d\u0001\u0000\u0000\u0000"+
		"\u001e\u001f\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 !"+
		"\u0005\u0003\u0000\u0000!\u0005\u0001\u0000\u0000\u0000\"$\u0003\b\u0004"+
		"\u0000#\"\u0001\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000%#\u0001\u0000"+
		"\u0000\u0000%&\u0001\u0000\u0000\u0000&\u0007\u0001\u0000\u0000\u0000"+
		"\'%\u0001\u0000\u0000\u0000()\u0005\u0007\u0000\u0000)*\u0005\u0005\u0000"+
		"\u0000*+\u0003\n\u0005\u0000+,\u0005\u0006\u0000\u0000,\t\u0001\u0000"+
		"\u0000\u0000-.\u0007\u0000\u0000\u0000.\u000b\u0001\u0000\u0000\u0000"+
		"\u0004\u0010\u0017\u001e%";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}