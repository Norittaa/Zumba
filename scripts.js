$.getJSON( "https://api.airtable.com/v0/appmZrzSVYBsjqjl9/zumba%20students?api_key=keyCY2J3kHTO3SsDs", function( data ) {
console.log(data.records);
 var items = [];
  $.each( data.records, function( index, val ) {
   
    items.push( "<li id='" + val.id + "'>" + val.fields["Name"] + "</li>" );
  });
 
  $( "<ol/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
