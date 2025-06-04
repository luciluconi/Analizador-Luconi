// Generated from c:/Users/lucil/Desktop/lucialuconi.ananalizador/ssl-antlr-calculator/LuciaLuconi.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LuciaLuconiParser}.
 */
public interface LuciaLuconiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LuciaLuconiParser#configuracion}.
	 * @param ctx the parse tree
	 */
	void enterConfiguracion(LuciaLuconiParser.ConfiguracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuciaLuconiParser#configuracion}.
	 * @param ctx the parse tree
	 */
	void exitConfiguracion(LuciaLuconiParser.ConfiguracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuciaLuconiParser#secciones}.
	 * @param ctx the parse tree
	 */
	void enterSecciones(LuciaLuconiParser.SeccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuciaLuconiParser#secciones}.
	 * @param ctx the parse tree
	 */
	void exitSecciones(LuciaLuconiParser.SeccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuciaLuconiParser#seccion}.
	 * @param ctx the parse tree
	 */
	void enterSeccion(LuciaLuconiParser.SeccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuciaLuconiParser#seccion}.
	 * @param ctx the parse tree
	 */
	void exitSeccion(LuciaLuconiParser.SeccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuciaLuconiParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(LuciaLuconiParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuciaLuconiParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(LuciaLuconiParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuciaLuconiParser#parametro}.
	 * @param ctx the parse tree
	 */
	void enterParametro(LuciaLuconiParser.ParametroContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuciaLuconiParser#parametro}.
	 * @param ctx the parse tree
	 */
	void exitParametro(LuciaLuconiParser.ParametroContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuciaLuconiParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(LuciaLuconiParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuciaLuconiParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(LuciaLuconiParser.ValorContext ctx);
}