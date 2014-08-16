/**
 * For documentation please refer to the project wiki:
 * https://github.com/bvaughn/angular-form-for/wiki/API-Reference#checkboxfield
 */
angular.module('formFor').directive('checkboxField',
  function($log, FormForConfiguration, StringUtil) {
    return {
      require: '^formFor',
      restrict: 'EA',
      templateUrl: 'form-for/templates/checkbox-field.html',
      scope: {
        attribute: '@',
        disable: '@',
        help: '@?'
      },
      link: function($scope, $element, $attributes, formForController) {
        if (!$scope.attribute) {
          $log.error('Missing required field "attribute"');

          return;
        }

        $scope.model = formForController.registerFormField($scope, $scope.attribute);
        $scope.label = $attributes.label;

        if (!$scope.label && FormForConfiguration.autoLabel) {
          $scope.label = StringUtil.humanize($scope.attribute);
        }

        var $input = $element.find('input');

        $scope.toggle = function toggle() {
          if (!$scope.disable && !$scope.disabledByForm) {
            $scope.model.bindable = !$scope.model.bindable;
          }
        };
      }
    };
  });
