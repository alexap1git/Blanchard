$( function() {
   $( "#accordion" ).accordion({animate: {easing:'easeInCirc', duration: 600}});
  // $( "#accordion" ).accordion({animate: {easing:'linear', duration: 600}});
 //   $( "#accordion" ).accordion( {animate: 500 });
  } );

  new simpleBar(document.getElementById('myElement'), {
      scrollbarMinSize : 2,
    option2: value2
  });
  const simpleBar = new simpleBar(document.getElementById('myElement'));
  simpleBar.recalculate();