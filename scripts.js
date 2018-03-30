$.getJSON( "https://api.airtable.com/v0/appmZrzSVYBsjqjl9/zumba%20locations?api_key=keyCY2J3kHTO3SsDs", function( data ) {
  // console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {

    items.push( "<li id='" + val.id + "'>" + val.fields["gym"] + "</li>" );
  });

  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
