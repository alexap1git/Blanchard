    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.613],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                //coordinates: [55.66056,36.55449] // координаты точки[48.872569715329895,2.3544960539699398]
                coordinates: [55.77256,37.65449] // координаты точки[48.872569715329895,2.3544960539699398]
            }
        });
        var myPlacemark = new ymaps.Placemark([55.759197, 37.613064], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'Subtract.svg',
            iconImageSize: [20, 30],
            iconImageOffset: [-3, -42]
        });

        // Размещение геообъекта на карте.
       // myMap.geoObjects.add(myGeoObject); 
        myMap.geoObjects.add(myPlacemark); 
        myMap.geoObjects.add(_myGeoObject); 
    }