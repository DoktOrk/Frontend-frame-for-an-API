//toggles between hiding and showing the dropdown content//
function dropdownMenuFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//close the dropdown menu if the user clicks outside of it//
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//the variable "url" is empty yet, that's why it won't work if you click on the buttons//
            var url = "";
            $.getJSON(url + "?callback=?", function(result){
              
//button handlers for live channels//
                $('.button-liveChannel').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForLiveChannelButton.push("<li>" + "liveChannelSorted: " + displayedItem + "</li>");
                        }
                    });
                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort();
                    $("#displayedLiveChannelButton").append(sortedDisplayedItemsListForLiveChannelButton);
                    
                    $(".button-liveChannel").addClass('displayed');
                    $('#liveChannelButton0').fadeOut(0);
                    $('#liveChannelButton4').fadeIn();
                    $('.dropdown').fadeIn();
                    $('#liveChannelButton2').fadeIn();

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                });


                $('.button-liveChannel-refresh').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForLiveChannelButton.push("<li>" + "liveChannelSorted: " + displayedItem + "</li>");
                        }
                    });
                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort();
                    $("#displayedLiveChannelButton").empty();
                    $("#displayedLiveChannelButton").append(sortedDisplayedItemsListForLiveChannelButton);
                    
                    $('.dropdown').fadeIn();
                    $('#liveChannelButton2').fadeIn();

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                });


                $('.button-liveChannel-order-asc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForLiveChannelButton.push("<li>" + "liveChannelSorted: " + displayedItem + "</li>");
                        }
                    });
                    
                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort().reverse();
                    $("#displayedLiveChannelButton").empty();
                    $("#displayedLiveChannelButton").append(sortedDisplayedItemsListForLiveChannelButton);

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                });


                $('.button-liveChannel-order-desc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForLiveChannelButton.push("<li>" + "liveChannelSorted: " + displayedItem + "</li>");
                        }
                    });

                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort();
                    $("#displayedLiveChannelButton").empty();
                    $("#displayedLiveChannelButton").append(sortedDisplayedItemsListForLiveChannelButton);

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                });


                $('.button-liveChannel-view-desc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.viewers + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForLiveChannelButton.push(displayedItem);
                        }
                    });
                    
                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort(function(a, b){
                        return parseInt($(b).attr('class')) - parseInt($(a).attr('class'));
                    });
                    var sortedDisplayedItemsListForLiveChannelButtonLength = sortedDisplayedItemsListForLiveChannelButton.length;
                    var listShiftedS = [];
                    for (i = 0; i < sortedDisplayedItemsListForLiveChannelButtonLength; i++){
                        var shiftedS = sortedDisplayedItemsListForLiveChannelButton.shift();
                        listShiftedS.push("<li>" + "liveChannelSorted: " + shiftedS + "Viewed: " + $(shiftedS).attr('class') + "</li>");
                    }
                    
                    $("#displayedLiveChannelButton").empty();
                    $("#displayedLiveChannelButton").append(listShiftedS);

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                });


                $('.button-liveChannel-view-asc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.viewers + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForLiveChannelButton.push(displayedItem);
                        }
                    });
                    
                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort(function(a, b){
                        return parseInt($(b).attr('class')) - parseInt($(a).attr('class'));
                    });
                    var sortedDisplayedItemsListForLiveChannelButtonLength = sortedDisplayedItemsListForLiveChannelButton.length;
                    var listShiftedS = [];
                    for (i = 0; i < sortedDisplayedItemsListForLiveChannelButtonLength; i++){
                        var shiftedS = sortedDisplayedItemsListForLiveChannelButton.shift();
                        listShiftedS.push("<li>" + "liveChannelSorted: " + shiftedS + "Viewed: " + $(shiftedS).attr('class') + "</li>");
                    }
                    listShiftedS.reverse();

                    $("#displayedLiveChannelButton").empty();
                    $("#displayedLiveChannelButton").append(listShiftedS);

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                });


                $('.button-liveChannel-location-asc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.location.country + v.location.city + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "><div class="tiptextCountry">' + "Country: " + v.location.country + ", City: " + v.location.city + '<div class="coordinates"> coordinates: latitude: ' + v.location.coordinates.latitude + ', longitude: ' + v.location.coordinates.longitude + '</div></div></a>';
                            displayedItemsListForLiveChannelButton.push("<li>" + "liveChannelSorted: " + displayedItem + "</li>");
                        }
                    });

                    sortedDisplayedItemsListForLiveChannelButton = displayedItemsListForLiveChannelButton.sort();
                    $("#displayedLiveChannelButton").empty();
                    $("#displayedLiveChannelButton").append(sortedDisplayedItemsListForLiveChannelButton);

                    $(".tiptext").mouseover(function() {
                        $(this).children(".description").show();
                    }).mouseout(function() {
                        $(this).children(".description").hide();
                    });

                    $(".tiptextCountry").mouseover(function() {
                        $(this).children(".coordinates").show();
                    }).mouseout(function() {
                        $(this).children(".coordinates").hide();
                    });

                });


                $('.button-liveChannel-hide').on('click', function(){
                    $("#displayedLiveChannelButton").empty();
                    $('#liveChannelButton4').fadeOut(0);
                    $('.dropdown').fadeOut(0);
                    $('#liveChannelButton2').fadeOut(0);
                    $('#liveChannelButton0').fadeIn();
                    $(".button-liveChannel").removeClass('displayed');
                });


            });


//the search bar//
            jQuery(function($){
                $('#search-trigger').click(function(){
                    $('#title-search-input').toggleClass('form-search-input-open');
                });
                $(document).click(function(e){
                    if(!$(e.target).closest('.title-search-form').length){
                        $('#title-search-input').removeClass('form-search-input-open');
                    }
                });
            });
