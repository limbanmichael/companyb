var myApp = angular
        .module("myApp", [])
        .controller('myController', function($scope){
          $scope.home = 'active';
          $scope.about = '';
          $scope.product = '';
          $scope.contact = '';
          $scope.homeComponent = true;
          $scope.aboutComponent = false;
          $scope.shoesComponent = false;
          $scope.pantsComponent = false;
          $scope.shirtsComponent = false
          $scope.contactComponent = false;

          $scope.navBar = function(i) {
            if (i === 'home') {
              $scope.home = 'active';
              $scope.about = '';
              $scope.product = '';
              $scope.contact = '';
              $scope.homeComponent = true;
              $scope.aboutComponent = false;
              $scope.shoesComponent = false;
              $scope.pantsComponent = false;
              $scope.shirtsComponent = false
              $scope.contactComponent = false;
            }
            else if (i === 'about') {
              $scope.home = '';
              $scope.about = 'active';
              $scope.product = '';
              $scope.contact = '';
              $scope.homeComponent = false;
              $scope.aboutComponent = true;
              $scope.shoesComponent = false;
              $scope.pantsComponent = false;
              $scope.shirtsComponent = false
              $scope.contactComponent = false;
            }
            else if (i === 'product') {
              $scope.home = '';
              $scope.about = '';
              $scope.product = 'active';
              $scope.contact = '';
            }
            else if (i === 'shoes') {
              $scope.homeComponent = false;
              $scope.aboutComponent = false;
              $scope.shoesComponent = true;
              $scope.pantsComponent = false;
              $scope.shirtsComponent = false
              $scope.contactComponent = false;
              console.log('shoes');
            }
            else if (i === 'pants') {
              $scope.homeComponent = false;
              $scope.aboutComponent = false;
              $scope.shoesComponent = false;
              $scope.pantsComponent = true;
              $scope.shirtsComponent = false
              $scope.contactComponent = false;
            }
            else if (i === 'shirts') {
              $scope.homeComponent = false;
              $scope.aboutComponent = false;
              $scope.shoesComponent = false;
              $scope.pantsComponent = false;
              $scope.shirtsComponent = true
              $scope.contactComponent = false;
            }
            else if (i === 'contact') {
              $scope.home = '';
              $scope.about = '';
              $scope.product = '';
              $scope.contact = 'active';
              $scope.homeComponent = false;
              $scope.aboutComponent = false;
              $scope.shoesComponent = false;
              $scope.pantsComponent = false;
              $scope.shirtsComponent = false
              $scope.contactComponent = true;
            }
          };

        })
        .component("home", {
            templateUrl: 'components/home/index.html'
        })
        .component("about", {
            templateUrl: 'components/about/index.html'
        })
        .component("categories", {
            templateUrl: 'components/categories/index.html'
        })
        .component("contact", {
          templateUrl: 'components/contact/index.html'
        })
        .component("shoes", {
          templateUrl: 'components/shoes/index.html',
          controller: function ($rootScope, $attrs, $scope) {
            $scope.shoesImage = [];
            $scope.shoesImageFem = [];
            $scope.shoesImageKids = [];
            $scope.maleShoes = true;
            $scope.femaleShoes = false;
            $scope.kidShoes = false;
            $scope.shoesObj = [
              {image: '.../../assets/men/shoes/1.jpg', title: 'Shoes Number 1', content:'Men shoes'},
              {image: '.../../assets/men/shoes/2.jpg', title: 'Shoes Number 2', content:'Men shoes'},
              {image: '.../../assets/men/shoes/3.jpg', title: 'Shoes Number 3', content:'Men shoes'},
              {image: '.../../assets/men/shoes/4.jpg', title: 'Shoes Number 4', content:'Men shoes'},
              {image: '.../../assets/men/shoes/5.jpg', title: 'Shoes Number 5', content:'Men shoes'},
              {image: '.../../assets/men/shoes/6.jpg', title: 'Shoes Number 6', content:'Men shoes'},
              {image: '.../../assets/men/shoes/7.jpg', title: 'Shoes Number 7', content:'Men shoes'},
              {image: '.../../assets/men/shoes/8.jpg', title: 'Shoes Number 8', content:'Men shoes'}
            ];

            $scope.shoesObjFem = [
              {image: '.../../assets/women/shoes/1.jpg', title: 'Shoes Number 1', content:'Women shoes'},
              {image: '.../../assets/women/shoes/2.jpg', title: 'Shoes Number 2', content:'Women shoes'},
              {image: '.../../assets/women/shoes/3.jpg', title: 'Shoes Number 3', content:'Women shoes'},
              {image: '.../../assets/women/shoes/4.jpg', title: 'Shoes Number 4', content:'Women shoes'},
              {image: '.../../assets/women/shoes/5.jpg', title: 'Shoes Number 5', content:'Women shoes'},
              {image: '.../../assets/women/shoes/6.jpg', title: 'Shoes Number 6', content:'Women shoes'},
              {image: '.../../assets/women/shoes/7.jpg', title: 'Shoes Number 7', content:'Women shoes'},
              {image: '.../../assets/women/shoes/8.jpg', title: 'Shoes Number 8', content:'Women shoes'},
              {image: '.../../assets/women/shoes/9.jpg', title: 'Shoes Number 9', content:'Women shoes'},
              {image: '.../../assets/women/shoes/10.jpg', title: 'Shoes Number 10', content:'Women shoes'},
              {image: '.../../assets/women/shoes/11.jpg', title: 'Shoes Number 11', content:'Women shoes'},
              {image: '.../../assets/women/shoes/12.jpg', title: 'Shoes Number 12', content:'Women shoes'},
            ];

            $scope.shoesObjKids = [
              {image: '.../../assets/kids/shoes/1.jpg', title: 'Shoes Number 1', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/2.jpg', title: 'Shoes Number 2', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/3.jpg', title: 'Shoes Number 3', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/4.jpg', title: 'Shoes Number 4', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/5.jpg', title: 'Shoes Number 5', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/6.jpg', title: 'Shoes Number 6', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/7.jpg', title: 'Shoes Number 7', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/8.jpg', title: 'Shoes Number 8', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/9.jpg', title: 'Shoes Number 9', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/10.jpg', title: 'Shoes Number 10', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/11.jpg', title: 'Shoes Number 11', content:'Kids shoes'},
              {image: '.../../assets/kids/shoes/12.jpg', title: 'Shoes Number 12', content:'Kids shoes'},
            ];

            $scope.showMale = function() {
              $scope.maleShoes = true;
              $scope.femaleShoes = false;
              $scope.kidShoes = false;
            };

            $scope.showFemale = function() {
              $scope.maleShoes = false;
              $scope.femaleShoes = true;
              $scope.kidShoes = false;
            };

            $scope.showKids = function() {
              $scope.maleShoes = false;
              $scope.femaleShoes = false;
              $scope.kidShoes = true;
            };

            // iterate on maleshoes object
            $scope.mapShoes = function() {
              $scope.dataImage = $scope.shoesObj.map(x => {
                $scope.shoesImage.push({image: x.image, title: x.title, content: x.content});
                return x;
              });
              $scope.imageHolder = $scope.shoesImage.map(y => {
                return y;
              });
            };

            //iterate on female shoes object
            $scope.mapShoesFem = function() {
              $scope.dataImageFem = $scope.shoesObjFem.map(x=> {
                $scope.shoesImageFem.push({image: x.image, title: x.title, content: x.content});
                return x;
              });
              $scope.imageHolderFem = $scope.shoesImageFem.map(y => {
                return y;
              });
            };

            // iterate on kids shoes object
            $scope.mapShoesKids = function() {
              $scope.dataImageKids = $scope.shoesObjKids.map(x=> {
                $scope.shoesImageKids.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderKids = $scope.shoesImageKids.map(y => {
                return y;
              });
            };

            this.$onInit = function(){
              $scope.mapShoesKids();
              $scope.mapShoes();
              $scope.mapShoesFem();
              // console.log($scope.imageHolder, 'hey');
            };
          }
        })
        .component("pants", {
          templateUrl: 'components/pants/index.html',
          controller: function ($rootScope, $attrs, $scope) {
            $scope.femPants = false;
            $scope.malePants = true;
            $scope.kidsPants = false;
            $scope.pantsImageFem = [];
            $scope.pantsImageMale = [];
            $scope.pantsImageKids = [];
            $scope.pantsObjKids = [
              {image: '.../../assets/kids/pants/1.jpg', title: 'pants Number 1', content:'Kids pants'},
              {image: '.../../assets/kids/pants/2.jpg', title: 'pants Number 2', content:'Kids pants'},
              {image: '.../../assets/kids/pants/3.jpg', title: 'pants Number 3', content:'Kids pants'},
              {image: '.../../assets/kids/pants/4.jpg', title: 'pants Number 4', content:'Kids pants'},
              {image: '.../../assets/kids/pants/5.jpg', title: 'pants Number 5', content:'Kids pants'},
              {image: '.../../assets/kids/pants/6.jpg', title: 'pants Number 6', content:'Kids pants'},
              {image: '.../../assets/kids/pants/7.jpg', title: 'pants Number 7', content:'Kids pants'},
              {image: '.../../assets/kids/pants/8.jpg', title: 'pants Number 8', content:'Kids pants'},
              {image: '.../../assets/kids/pants/9.jpg', title: 'pants Number 9', content:'Kids pants'},
              {image: '.../../assets/kids/pants/10.jpg', title: 'pants Number 10', content:'Kids pants'},
              {image: '.../../assets/kids/pants/11.jpg', title: 'pants Number 11', content:'Kids pants'},
              {image: '.../../assets/kids/pants/12.jpg', title: 'pants Number 12', content:'Kids pants'},
            ];
            $scope.pantsObjFem = [
              {image: '.../../assets/women/pants/1.jpg', title: 'pants Number 1', content:'Women pants'},
              {image: '.../../assets/women/pants/2.jpg', title: 'pants Number 2', content:'Women pants'},
              {image: '.../../assets/women/pants/3.jpg', title: 'pants Number 3', content:'Women pants'},
              {image: '.../../assets/women/pants/4.jpg', title: 'pants Number 4', content:'Women pants'},
              {image: '.../../assets/women/pants/5.jpg', title: 'pants Number 5', content:'Women pants'},
              {image: '.../../assets/women/pants/6.jpg', title: 'pants Number 6', content:'Women pants'},
              {image: '.../../assets/women/pants/7.jpg', title: 'pants Number 7', content:'Women pants'},
              {image: '.../../assets/women/pants/8.jpg', title: 'pants Number 8', content:'Women pants'},
              {image: '.../../assets/women/pants/9.jpg', title: 'pants Number 9', content:'Women pants'},
              {image: '.../../assets/women/pants/10.jpg', title: 'pants Number 10', content:'Women pants'},
              {image: '.../../assets/women/pants/11.jpg', title: 'pants Number 11', content:'Women pants'},
              {image: '.../../assets/women/pants/12.jpg', title: 'pants Number 12', content:'Women pants'},
            ];
            $scope.pantsObjMale = [
              {image: '.../../assets/men/pants/1.jpg', title: 'pants Number 1', content:'Men pants'},
              {image: '.../../assets/men/pants/2.jpg', title: 'pants Number 2', content:'Men pants'},
              {image: '.../../assets/men/pants/3.jpg', title: 'pants Number 3', content:'Men pants'},
              {image: '.../../assets/men/pants/4.jpg', title: 'pants Number 4', content:'Men pants'},
              {image: '.../../assets/men/pants/5.jpg', title: 'pants Number 5', content:'Men pants'},
              {image: '.../../assets/men/pants/6.jpg', title: 'pants Number 6', content:'Men pants'},
              {image: '.../../assets/men/pants/7.jpg', title: 'pants Number 7', content:'Men pants'},
              {image: '.../../assets/men/pants/8.jpg', title: 'pants Number 8', content:'Men pants'},
              {image: '.../../assets/men/pants/9.jpg', title: 'pants Number 9', content:'Men pants'},
              {image: '.../../assets/men/pants/10.jpg', title: 'pants Number 10', content:'Men pants'},
              {image: '.../../assets/men/pants/11.jpg', title: 'pants Number 11', content:'Men pants'},
              {image: '.../../assets/men/pants/12.jpg', title: 'pants Number 12', content:'Men pants'},
            ];

            $scope.showKids = function() {
              $scope.malePants = false;
              $scope.femPants = false;
              $scope.kidsPants = true;
            };
            $scope.showMale = function() {
              $scope.malePants = true;
              $scope.femPants = false;
              $scope.kidsPants = false;
            };
            $scope.showFemale = function() {
              $scope.malePants = false;
              $scope.femPants = true;
              $scope.kidsPants = false;
            };

            // iterate on female pants object
            $scope.mapPantsFem = function() {
              $scope.dataImageFem = $scope.pantsObjFem.map(x=> {
                $scope.pantsImageFem.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderFem = $scope.pantsImageFem.map(y => {
                return y;
              });
            };

            // iterate on male pants object
            $scope.mapPantsMale = function() {
              $scope.dataImageMale = $scope.pantsObjMale.map(x=> {
                $scope.pantsImageMale.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderMale = $scope.pantsImageMale.map(y => {
                return y;
              });
            };

            // iterate on kids pants object
            $scope.mapPantsKids = function() {
              $scope.dataImageKids = $scope.pantsObjKids.map(x=> {
                $scope.pantsImageKids.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderKids = $scope.pantsImageKids.map(y => {
                return y;
              });
            };

            this.$onInit = function(){
              $scope.mapPantsFem();
              $scope.mapPantsMale();
              $scope.mapPantsKids();
              console.log('hey');
            };
          }
        })
        .component("shirts", {
          templateUrl: 'components/shirts/index.html',
          controller: function ($rootScope, $attrs, $scope) {
            $scope.femShirts = false;
            $scope.maleShirts = true;
            $scope.kidsShirts = false;
            $scope.shirtsImageFem = [];
            $scope.shirtsImageMale = [];
            $scope.shirtsImageKids = [];
            $scope.shirtsObjKids = [
              {image: '.../../assets/kids/shirts/1.jpg', title: 'Shirt Number 1', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/2.jpg', title: 'Shirt Number 2', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/3.jpg', title: 'Shirt Number 3', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/4.jpg', title: 'Shirt Number 4', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/5.jpg', title: 'Shirt Number 5', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/6.jpg', title: 'Shirt Number 6', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/7.jpg', title: 'Shirt Number 7', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/8.jpg', title: 'Shirt Number 8', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/9.jpg', title: 'Shirt Number 9', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/10.jpg', title: 'Shirt Number 10', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/11.jpg', title: 'Shirt Number 11', content:'Kids Shirt'},
              {image: '.../../assets/kids/shirts/12.jpg', title: 'Shirt Number 12', content:'Kids Shirt'},
            ];
            $scope.shirtsObjFem = [
              {image: '.../../assets/women/shirts/1.jpg', title: 'Shirt Number 1', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/2.jpg', title: 'Shirt Number 2', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/3.jpg', title: 'Shirt Number 3', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/4.jpg', title: 'Shirt Number 4', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/5.jpg', title: 'Shirt Number 5', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/6.jpg', title: 'Shirt Number 6', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/7.jpg', title: 'Shirt Number 7', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/8.jpg', title: 'Shirt Number 8', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/9.jpg', title: 'Shirt Number 9', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/10.jpg', title: 'Shirt Number 10', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/11.jpg', title: 'Shirt Number 11', content:'Women Shirt'},
              {image: '.../../assets/women/shirts/12.jpg', title: 'Shirt Number 12', content:'Women Shirt'},
            ];
            $scope.shirtsObjMale = [
              {image: '.../../assets/men/shirts/1.jpg', title: 'Shirt Number 1', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/2.jpg', title: 'Shirt Number 2', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/3.jpg', title: 'Shirt Number 3', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/4.jpg', title: 'Shirt Number 4', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/5.jpg', title: 'Shirt Number 5', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/6.jpg', title: 'Shirt Number 6', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/7.jpg', title: 'Shirt Number 7', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/8.jpg', title: 'Shirt Number 8', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/9.jpg', title: 'Shirt Number 9', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/10.jpg', title: 'Shirt Number 10', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/11.jpg', title: 'Shirt Number 11', content:'Men Shirt'},
              {image: '.../../assets/men/shirts/12.jpg', title: 'Shirt Number 12', content:'Men Shirt'},
            ];

            $scope.showKids = function() {
              $scope.maleShirts = false;
              $scope.femShirts = false;
              $scope.kidsShirts = true;
            };
            $scope.showMale = function() {
              $scope.maleShirts = true;
              $scope.femShirts = false;
              $scope.kidsShirts = false;
            };
            $scope.showFemale = function() {
              $scope.maleShirts = false;
              $scope.femShirts = true;
              $scope.kidsShirts = false;
            };

            // iterate on female pants object
            $scope.mapShirtsFem = function() {
              $scope.dataImageFem = $scope.shirtsObjFem.map(x=> {
                $scope.shirtsImageFem.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderFem = $scope.shirtsImageFem.map(y => {
                return y;
              });
            };

            // iterate on male pants object
            $scope.mapShirtsMale = function() {
              $scope.dataImageMale = $scope.shirtsObjMale.map(x=> {
                $scope.shirtsImageMale.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderMale = $scope.shirtsImageMale.map(y => {
                return y;
              });
            };

            // iterate on kids pants object
            $scope.mapShirtsKids = function() {
              $scope.dataImageKids = $scope.shirtsObjKids.map(x=> {
                $scope.shirtsImageKids.push({image: x.image, title: x.title, content: x.content});
                console.log(x.image);
                return x;
              });
              $scope.imageHolderKids = $scope.shirtsImageKids.map(y => {
                return y;
              });
            };

            this.$onInit = function(){
              $scope.mapShirtsFem();
              $scope.mapShirtsMale();
              $scope.mapShirtsKids();
              console.log('hey');
            };
          }
        });
$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('.product-collapse').collapsible();

  $('.carousel').carousel({
    duration: 1000,
    closeOnClick: true
  });

  $("#homeCarousel").click(function(){
    $('.carousel').carousel({
      duration: 1000
    });
  });

  $("#homeCarouselMobile").click(function(){
    $('.carousel').carousel({
      duration: 1000
    });
  });
  // $('.dropdown-button').dropdown('open');
      $('.dropdown-button').dropdown({
          inDuration: 1000,
          outDuration: 1000,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          stopPropagation: false // Stops event propagation
        }
      );
});
