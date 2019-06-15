let moduloCatalogo = angular.module('parcialAngular');

moduloCatalogo.controller('catalogoController', function(){
    let vm = this;


    
    vm.telefonos = [
        { brand: "Iphone", model: "X",  price: 1000, ram: "16GB", internalStorage:"128GB" , battery:"120" , screenSize:"12x14", os: "IOS 12", frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBfGYzGuHbfrR-XNQZrsBmhT1TGXbmcFiGdY1KJRtGE4En1BD-g", rearImage: "https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg" },
        { brand: "Samsung", model: "Galaxy 10", price: 900, ram: "16GB" , internalStorage:"128GB" , battery:"120" , screenSize:"12x14", os: "Android", frontImage: "https://www.sprint.com/content/dam/sprint/commerce/devices/samsung/samsung-galaxy-s10/white/devicenb_650x900.png", rearImage: "https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-s10-dual-sim-en-verde-de-128gb-y-8gb-ram-sm-g973f-ds-detras.jpg" },
        { brand: "Huawei", model: "P30", price: 750, ram: "12GB" , internalStorage:"128GB" , battery:"120" , screenSize:"12x14", os: "?", frontImage: "https://tigocolombia.vteximg.com.br/arquivos/ids/157030-500-500/optimizada1.png?v=636900859947700000", rearImage: "https://images-na.ssl-images-amazon.com/images/I/51dWKj8zYnL._SL1000_.jpg"},
    ];

    

});    