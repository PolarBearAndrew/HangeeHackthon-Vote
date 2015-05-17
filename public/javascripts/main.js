$(function(){
  //var player;

  // function onYouTubeIframeAPIReady() {
  //     player = new YT.Player('ytplayer', {
  //         events: {
  //             'onReady': onPlayerReady
  //         }
  //     });
  // }

  // function onPlayerReady(event) {
  //     player.setVolume(0);
  //     player.mute();
  //     player.playVideo();
  //     console.log('123123123');
  // }

  $( "#creatTeam" ).submit(function( event ) {

    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this ),
      // console.log( $form, '123')
      term = $form.find( "#aaa" ).val(),
      url = $form.attr( "action" );
      console.log($form)
    // Send the data using post
    var posting = $.post( url, { aa: 'term' } );

    // Put the results in a div
    posting.done(function( data ) {
      var content = $( data ).find( "#content" );
      $( "#result" ).empty().append( content );
    });
  });

  //$('#submitVote').click(function( event ){
  $('input[type=checkbox]').click(function( event ){

    //event.preventDefault();
    var count = $('input:checked').length;
    console.log('votes Count ', count);

    if( count > 5  ){
      alert('只能五票謝謝');
      event.preventDefault();
    }
  });


  $('#submitVote').click(function( event ){
    $.ajax({
      url: 'http://localhost:8080/api/vote/s',
      type: 'PUT',
      data: { id : ['5544c639b8defd741d92f081', '5544c65ab8defd741d92f082'] },
      success: function(data){
        console.log('vote success')
      },
      error: function(err){
        console.log('err', err)
      }
    });
  });
})
