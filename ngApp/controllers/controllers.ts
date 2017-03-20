namespace myapp.Controllers {

  class DialogController {
    public pickColor(favoriteColor: string) {
      this.$mdDialog.hide(favoriteColor);
    }

    constructor(private $mdDialog: angular.material.IDialogService) { }
  }

  export class HomeController {
    public favoriteColor: string

    public openDialog() {
      this.$mdDialog.show({
        controller: DialogController,
        controllerAs: 'dialog',
        templateUrl: '/ngApp/dialog.html',
        clickOutsideToClose: true
      }).then((favoriteColor: string) => {
          this.favoriteColor = favoriteColor;
      }, () => {
          this.favoriteColor = 'You cancelled the dialog.';
      });
    }

    constructor(private $mdDialog: angular.material.IDialogService) { }
  }

}
