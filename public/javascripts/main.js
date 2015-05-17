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

  $('#submitVote').click(function( event ){

    event.preventDefault();


    var votes = $('input[type=checkbox]');

    console.log('votes', votes)

    votes = votes.map(function(input){

      console.log('TEST', $(input).prop('checked'));

      // if($(input).checked)
      //   return input;
      // else
      //   return ;
    });

    console.log('votes', votes)
  });

})
