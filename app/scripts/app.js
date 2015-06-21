angular.module('formForDocumentation', ['oc.lazyLoad', 'flashr', 'formFor', 'formFor.materialTemplates', 'ngRoute', 'ui.bootstrap', 'ngMaterial', 'ui.router']).
  config(function($logProvider, $stateProvider, $urlRouterProvider) {
    $logProvider.debugEnabled(true);

    $stateProvider.state('app', {
      'abstract': true,
      url: '',
      templateUrl: 'app/views/partials/layout.html'
    });

    // Reports

    $stateProvider.state('app.formBuilderMarkup', {
      url: '/demo/form-builder-markup',
      templateUrl: 'app/views/form-builder-markup.html',
      controller: 'FormBuilderMarkupDemoController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('app.manualFormMarkup', {
      url: '/demo/manual-form-markup',
      templateUrl: 'app/views/manual-form-markup.html',
      controller: 'ManualFormMarkupDemoController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('app.selectField', {
      url: '/demo/select-field',
      templateUrl: 'app/views/select-field.html',
      controller: 'SelectFieldDemoController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('app.typeAhead', {
      url: '/demo/type-ahead',
      templateUrl: 'app/views/type-ahead.html',
      controller: 'TypeAheadDemoController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('app.dynamicIcons', {
      url: '/demo/dynamic-icons',
      templateUrl: 'app/views/dynamic-icons.html',
      controller: 'DynamicIconsDemoController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('app.collectionsForm', {
      url: '/demo/collections-form',
      templateUrl: 'app/views/collections.html',
      controller: 'CollectionsDemoController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('app.formMetadata', {
      url: '/demo/form-metadata',
      templateUrl: 'app/views/form-metadata.html',
      controller: 'FormMetadataDemoController',
      controllerAs: 'ctrl'
    });

    // Guides

    $stateProvider.state('app.overview', {
      url: '/demo/overview',
      templateUrl: 'app/views/overview.html'
    });

    $stateProvider.state('app.inputTypes', {
      url: '/demo/input-types',
      templateUrl: 'app/views/input-types.html'
    });

    $stateProvider.state('app.validationTypes', {
      url: '/demo/validation-types',
      templateUrl: 'app/views/validation-types.html'
    });

    $stateProvider.state('app.formBuilder', {
      url: '/demo/form-builder',
      templateUrl: 'app/views/form-builder.html',
      controller: 'IndexFormDemoController'
    });

    $stateProvider.state('app.templateOverrides', {
      url: '/demo/template-overrides',
      templateUrl: 'app/views/template-overrides.html'
    });

    $stateProvider.state('app.ie8Support', {
      url: '/demo/ie8-support',
      templateUrl: 'app/views/ie8-support.html'
    });

    // Default

    $stateProvider.state('app.index', {
      url: '/index',
      templateUrl: 'app/views/index.html',
      controller: 'IndexFormDemoController',
      controllerAs: 'ctrl'
    });

    // API docuumentation

    $stateProvider.state('app.documentation', {
      url: '/documentation',
      templateUrl: 'app/views/documentation/layout.html'
    });
    $stateProvider.state('app.documentation.index', {
      parent: 'app.documentation',
      url: '/index',
      templateUrl: 'app/views/documentation/index.html'
    });
    $stateProvider.state('app.documentation.forClass', {
      parent: 'app.documentation',
      url: '/:className',
      templateUrl: 'app/views/documentation/for-class.html',
      controller: function ($scope, $stateParams) {
        if ($stateParams.className) {
          $scope.templateUrl = 'app/views/documentation/classes/' + $stateParams.className + '.html';
        } else {
          $scope.templateUrl = 'app/views/documentation/index.html';
        }
      }
    });

    $urlRouterProvider.otherwise('/index');
  });