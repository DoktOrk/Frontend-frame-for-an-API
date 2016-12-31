//When the user clicks on the button, toggle between hiding and showing the dropdown content//
function dropdownMenuFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Closes the dropdown menu if the user clicks outside of it//
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



            var url = "";
            $.getJSON(url + "?callback=?", function(result){

//button handlers for live channels//
                
                $('.button-liveChannel').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });

                });


                $('.button-liveChannel-refresh').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });


                });


                $('.button-liveChannel-order-asc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });


                });


                $('.button-liveChannel-order-desc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.title + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });


                });


                $('.button-liveChannel-view-desc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.viewers + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });


                });


                $('.button-liveChannel-view-asc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.viewers + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });


                });


                $('.button-liveChannel-location-asc').on('click', function(){
                    var displayedItemsListForLiveChannelButton = [];
                    $.each(result, function(i, v) {
                        if (v.isLive == true) {
                            var displayedItem = '<a class=' + v.location.country + v.location.city + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "><div class="tiptextCountry">' + "Country: " + v.location.country + ", City: " + v.location.city + '<div class="coordinates"> coordinates: latitude: ' + v.location.coordinates.latitude + ', longitude: ' + v.location.coordinates.longitude + '</div></div></a>' + '<button id="' +v.id+'" class="toWatchItLater">Watch it later</button>';
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

                    $('.toWatchItLater').on('click', function(){
                        var testId = parseInt($(this).attr('id'));
                        if (!localStorage.testArray){
                            localStorage.testArray = testId + " ";
                            console.log(localStorage.testArray);
                        }else if(localStorage.testArray.indexOf(testId) != -1){
                            console.log("Already in the list.");
                            console.log(localStorage.testArray);
                        }else{
                            localStorage.testArray = localStorage.testArray.concat(testId + " ");
                            console.log(localStorage.testArray);
                        }
                    });
                    

                });


                $('.button-liveChannel-hide').on('click', function(){
                    $("#displayedLiveChannelButton").empty();
                    $('#liveChannelButton4').fadeOut(0);
                    $('.dropdown').fadeOut(0);
                    $('#liveChannelButton2').fadeOut(0);
                    $('#liveChannelButton0').fadeIn();
                    document.getElementById("liveChannelButton0").innerHTML = "Show live channels!";
                    $(".button-liveChannel").removeClass('displayed');
                });


                $('.watchItLaterButton').on('click', function(){
                    console.log(localStorage.testArray);
                    var workArr = localStorage.testArray.split(' ').map(function(item) {return parseInt(item, 10);});
                    console.log(workArr);
                    
                    displayedItemsListForWatchItLater = [];
                    $.each(result, function(i, v) {
                        if (workArr.indexOf(v.id) != -1) {
                            var displayedItem = '<a class=' + v.viewers + ' href="' + url + '/' + v.id +'"><div class="tiptext">' + v.title + '<div class="description">' + v.description + '</div></div><div class="tiptextCountry">' + "Country: " + v.location.country + ", City: " + v.location.city + '<div class="coordinates"> coordinates: latitude: ' + v.location.coordinates.latitude + ', longitude: ' + v.location.coordinates.longitude + '</div></div><div class="viewed">' + v.viewers + '</div></a>' + '<a href="#" itemTitle="'+ v.title +'"><img src=" '+ v.picture +' "></a>';
                            displayedItemsListForWatchItLater.push("<li>" + "myWatchItLaterList: " + displayedItem + "</li>");;
                        }
                    });

                    sortedDisplayedItemsListForWatchItLater = displayedItemsListForWatchItLater.sort();
                    $("#watchItLaterList").empty();
                    $("#watchItLaterList").append(sortedDisplayedItemsListForWatchItLater);
                    console.log(sortedDisplayedItemsListForWatchItLater);

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

// the empty-function doesn't work, if you click it before manipulating the watch-it-later list //
                $('.emptyWatchItLater').on('click', function(){
                    localStorage.testArray = "";
                    $("#watchItLaterList").empty();
                    alert("The list is empty");
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


//the watch-it-later function//
            jQuery(function($){
                $('.watchItLaterButton').click(function(){
                    $("#watchItLaterList").append(localStorage.wILListTest);
                });
            });
