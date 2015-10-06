// Type definitions for Angular v2.0.0-local_sha.7d5c3eb
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/test_lib depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="./angular2.d.ts"/>
///<reference path="../jasmine/jasmine.d.ts"/>



declare module ngTestLib {  
  /**
   * Allows injecting dependencies in `beforeEach()` and `it()`.
   * 
   * Example:
   * 
   * ```
   * beforeEach(inject([Dependency, AClass], (dep, object) => {
   *   // some code that uses `dep` and `object`
   *   // ...
   * }));
   * 
   * it('...', inject([AClass, AsyncTestCompleter], (object, async) => {
   *   object.doSomething().then(() => {
   *     expect(...);
   *     async.done();
   *   });
   * })
   * ```
   * 
   * Notes:
   * - injecting an `AsyncTestCompleter` allow completing async tests - this is the equivalent of
   *   adding a `done` parameter in Jasmine,
   * - inject is currently a function because of some Traceur limitation the syntax should eventually
   *   becomes `it('...', @Inject (object: AClass, async: AsyncTestCompleter) => { ... });`
   * 
   * @param {Array} tokens
   * @param {Function} fn
   * @return {FunctionWithParamTokens}
   */
  function inject(tokens: any[], fn: Function): FunctionWithParamTokens;
  

    
  var proxy: ClassDecorator;
  

    
  var afterEach: Function;
  

    
  type SyncTestFn = () => void

    
  interface NgMatchers extends jasmine.Matchers {
    
    toBe(expected: any): boolean;
    
    toEqual(expected: any): boolean;
    
    toBePromise(): boolean;
    
    toBeAnInstanceOf(expected: any): boolean;
    
    toHaveText(expected: any): boolean;
    
    toHaveCssClass(expected: any): boolean;
    
    toImplement(expected: any): boolean;
    
    toContainError(expected: any): boolean;
    
    toThrowErrorWith(expectedMessage: any): boolean;
    
    not: NgMatchers;
    
  }

    
  var expect: (actual: any) => NgMatchers;
  

    
  class AsyncTestCompleter {
    
    constructor(_done: Function);
    
    done(): void;
    
  }

    
  function describe(...args: any[]): void;
  

    
  function ddescribe(...args: any[]): void;
  

    
  function xdescribe(...args: any[]): void;
  

    
  function beforeEach(fn: FunctionWithParamTokens | SyncTestFn): void;
  

    
  /**
   * Allows overriding default bindings defined in test_injector.js.
   * 
   * The given function must return a list of DI bindings.
   * 
   * Example:
   * 
   *   beforeEachBindings(() => [
   *     bind(Compiler).toClass(MockCompiler),
   *     bind(SomeToken).toValue(myValue),
   *   ]);
   */
  function beforeEachBindings(fn: any): void;
  

    
  function it(name: any, fn: any, timeOut?: any): void;
  

    
  function xit(name: any, fn: any, timeOut?: any): void;
  

    
  function iit(name: any, fn: any, timeOut?: any): void;
  

    
  interface GuinessCompatibleSpy extends jasmine.Spy {
    
    /**
     * By chaining the spy with and.returnValue, all calls to the function will return a specific
     * value.
     */
    andReturn(val: any): void;
    
    /**
     * By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied
     * function.
     */
    andCallFake(fn: Function): GuinessCompatibleSpy;
    
    /**
     * removes all recorded calls
     */
    reset(): void;
    
  }

    
  class SpyObject {
    
    constructor(type?: any);
    
    static stub(object?: any, config?: any, overrides?: any): void;
    
    noSuchMethod(args: any): void;
    
    spy(name: any): void;
    
    prop(name: any, value: any): void;
    
  }

    
  function isInInnerZone(): boolean;
  

    
  interface RootTestComponent {
    
    debugElement: ng.DebugElement;
    
    detectChanges(): void;
    
    destroy(): void;
    
  }

    
  /**
   * Builds a RootTestComponent for use in component level tests.
   */
  class TestComponentBuilder {
    
    constructor(_injector: ng.Injector);
    
    /**
     * Overrides only the html of a {@link ComponentMetadata}.
     * All the other properties of the component's {@link ng.ViewMetadata} are preserved.
     * 
     * @param {ng.Type} component
     * @param {string} html
     * 
     * @return {TestComponentBuilder}
     */
    overrideTemplate(componentType: ng.Type, template: string): TestComponentBuilder;
    
    /**
     * Overrides a component's {@link ng.ViewMetadata}.
     * 
     * @param {ng.Type} component
     * @param {view} View
     * 
     * @return {TestComponentBuilder}
     */
    overrideView(componentType: ng.Type, view: ng.ViewMetadata): TestComponentBuilder;
    
    /**
     * Overrides the directives from the component {@link ng.ViewMetadata}.
     * 
     * @param {ng.Type} component
     * @param {ng.Type} from
     * @param {ng.Type} to
     * 
     * @return {TestComponentBuilder}
     */
    overrideDirective(componentType: ng.Type, from: ng.Type, to: ng.Type): TestComponentBuilder;
    
    /**
     * Overrides one or more injectables configured via `bindings` metadata property of a directive or
     * component.
     * Very useful when certain bindings need to be mocked out.
     * 
     * The bindings specified via this method are appended to the existing `bindings` causing the
     * duplicated bindings to
     * be overridden.
     * 
     * @param {ng.Type} component
     * @param {any[]} bindings
     * 
     * @return {TestComponentBuilder}
     */
    overrideBindings(type: ng.Type, bindings: any[]): TestComponentBuilder;
    
    /**
     * Overrides one or more injectables configured via `bindings` metadata property of a directive or
     * component.
     * Very useful when certain bindings need to be mocked out.
     * 
     * The bindings specified via this method are appended to the existing `bindings` causing the
     * duplicated bindings to
     * be overridden.
     * 
     * @param {ng.Type} component
     * @param {any[]} bindings
     * 
     * @return {TestComponentBuilder}
     */
    overrideViewBindings(type: ng.Type, bindings: any[]): TestComponentBuilder;
    
    /**
     * Builds and returns a RootTestComponent.
     * 
     * @return {Promise<RootTestComponent>}
     */
    createAsync(rootComponentType: ng.Type): Promise<RootTestComponent>;
    
  }

    
  function createTestInjector(bindings: Array<ng.Type | ng.Binding | any[]>): ng.Injector;
  

    
  class FunctionWithParamTokens {
    
    constructor(_tokens: any[], _fn: Function);
    
    /**
     * Returns the value of the executed function.
     */
    execute(injector: ng.Injector): any;
    
    hasToken(token: any): boolean;
    
  }

    
  /**
   * Wraps a function to be executed in the fakeAsync zone:
   * - microtasks are manually executed by calling `flushMicrotasks()`,
   * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
   * 
   * If there are any pending timers at the end of the function, an exception will be thrown.
   * 
   * @param fn
   * @returns {Function} The function wrapped to be executed in the fakeAsync zone
   */
  function fakeAsync(fn: Function): Function;
  

    
  function clearPendingTimers(): void;
  

    
  /**
   * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
   * 
   * The microtasks queue is drained at the very start of this function and after any timer callback
   * has been executed.
   * 
   * @param {number} millis Number of millisecond, defaults to 0
   */
  function tick(millis?: number): void;
  

    
  /**
   * Flush any pending microtasks.
   */
  function flushMicrotasks(): void;
  

    
  class Log {
    
    constructor();
    
    add(value: any): void;
    
    fn(value: any): void;
    
    clear(): void;
    
    result(): string;
    
  }

    
  class BrowserDetection {
    
    constructor(ua: string);
    
    isFirefox: boolean;
    
    isAndroid: boolean;
    
    isEdge: boolean;
    
    isIE: boolean;
    
    isWebkit: boolean;
    
    isIOS7: boolean;
    
    isSlow: boolean;
    
    supportsIntlApi: boolean;
    
  }

    
  var browserDetection: BrowserDetection;
  

    
  function dispatchEvent(element: any, eventType: any): void;
  

    
  function el(html: string): HTMLElement;
  

    
  function containsRegexp(input: string): RegExp;
  

    
  function normalizeCSS(css: string): string;
  

    
  function stringifyElement(el: any): string;
  

    
  var RootTestComponent: ng.InjectableReference;
  

  
}

declare module "angular2/test_lib" {
  export = ngTestLib;
}


