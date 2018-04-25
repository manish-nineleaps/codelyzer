export { Rule as AngularWhitespaceRule } from './angularWhitespaceRule';
export { Rule as BananaInBoxRule } from './bananaInBoxRule';
export { Rule as ComponentClassSuffixRule } from './componentClassSuffixRule';
export { Rule as ComponentSelectorRule } from './componentSelectorRule';
export { Rule as ContextualLifeCycleRule } from './contextualLifeCycleRule';
export { Rule as DecoratorNotAllowedRule } from './decoratorNotAllowedRule';
export { Rule as DirectiveClassSuffixRule } from './directiveClassSuffixRule';
export { Rule as DirectiveSelectorRule } from './directiveSelectorRule';
export { Rule as EnforceComponentSelectorRule } from './enforceComponentSelectorRule';
export { Rule as I18nRule } from './i18nRule';
export { Rule as ImportDestructuringSpacingRule } from './importDestructuringSpacingRule';
export { Rule as MaxInlineDeclarationsRule } from './maxInlineDeclarationsRule';
export { Rule as NoAttributeParameterDecoratorRule } from './noAttributeParameterDecoratorRule';
export { Rule as NoConflictingLifeCycleHooksRule } from './noConflictingLifeCycleHooksRule';
export { Rule as NoForwardRefRule } from './noForwardRefRule';
export { Rule as NoInputPrefixRule } from './noInputPrefixRule';
export { Rule as NoInputRenameRule } from './noInputRenameRule';
export { Rule as NoLifeCycleCallRule } from './noLifeCycleCallRule';
export { Rule as NoOutputNamedAfterStandardEventRule } from './noOutputNamedAfterStandardEventRule';
export { Rule as NoOutputOnPrefixRule } from './noOutputOnPrefixRule';
export { Rule as NoOutputRenameRule } from './noOutputRenameRule';
export { Rule as NoQueriesParameterRule } from './noQueriesParameterRule';
export { Rule as NoUnusedCssRule } from './noUnusedCssRule';
export { Rule as PipeImpureRule } from './pipeImpureRule';
export { Rule as PipeNamingRule } from './pipeNamingRule';
export { Rule as PreferOutputReadonlyRule } from './preferOutputReadonlyRule';
export { Rule as TemplateConditionalComplexityRule } from './templateConditionalComplexityRule';
export { Rule as TemplateCyclomaticComplexityRule } from './templateCyclomaticComplexityRule';
export { Rule as TemplatesNoNegatedAsync } from './templatesNoNegatedAsyncRule';
export { Rule as TrackByFunctionRule } from './trackByFunctionRule';
export { Rule as UseHostPropertyDecoratorRule } from './useHostPropertyDecoratorRule';
export { Rule as UseInputPropertyDecoratorRule } from './useInputPropertyDecoratorRule';
export { Rule as UseLifeCycleInterfaceRule } from './useLifeCycleInterfaceRule';
export { Rule as UseOutputPropertyDecoratorRule } from './useOutputPropertyDecoratorRule';
export { Rule as UsePipeDecoratorRule } from './usePipeDecoratorRule';
export { Rule as UsePipeTransformInterfaceRule } from './usePipeTransformInterfaceRule';
export { Rule as UseViewEncapsulationRule } from './useViewEncapsulationRule';

export * from './angular/config';

// this file exists for tslint to resolve the rules directory
export const rulesDirectory = '.';
