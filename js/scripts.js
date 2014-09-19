$(document).ready(function() {
    //Add class to table row when checkbox is checked, to change styles
    $('.over-table input').click(function() {
        $(this).parents("tr:first").toggleClass('selected');
    });

     //Toggle show/hide of the extra table when a row is selected
     $('.over-table input').click(function(){
        if($(this).is(':checked')){
            $('.extra-info').css('display', 'block');
        }
        else{
            $('.extra-info').css('display', 'none');
        } 
    });

     //When user chooses a filter from the first drop down the 2nd field (greater than) becomes active
     $('.comments .form-control').change(function(){

        //make the <select> box disabled if the user selects the first choice again.
        var enable = !$(this).find('option:selected.activate').length;
        $('#depend').prop('disabled', enable); 
    });

        //First drop down: choose registration date and usergroup. 
        //Second dropdown if there is a registration date chosen: 
        //dropdown with before, after and on. Third drop down: calendar to pick a date.
        $(".reg-date select").change(function(){
            $("select option:selected").each(function(){
                if($(this).attr("value")=="option"){
                   $("#show-1, #show-2, #show-3").removeClass("hide");
               }
           });
        })

        $(".usergroup-1 select").change(function(){
            $("select option:selected").each(function(){
                if($(this).attr("value")=="usergroup"){
                   $("#checkboxes-div-1").removeClass("hide");
               }
           });
        })

        $(".usergroup-2 select").change(function(){
            $("select option:selected").each(function(){
                if($(this).attr("value")=="usergroup"){
                   $("#checkboxes-div-2").removeClass("hide");
               }
           });
        })

        


        



    // Keep the  "select one or more options" menu open, so you can check all the checkboxes you want.
    $(".check-first").mouseover(function() {
        $(this).css('display', 'block');
    });
    $(".check-first").mouseleave(function() {
        $(this).css('display', 'none');
    });

    $(".check-second").mouseover(function() {
        $(this).css('display', 'block');
    });
    $(".check-second").mouseleave(function() {
        $(this).css('display', 'none');
    });

     // This is to open the "select one or more options" menu again after it was closed.
     $(".open-first").click(function() {
        $(".check-first").css('display', 'block');
    });
     $(".open-second").click(function() {
        $(".check-second").css('display', 'block');
    });

    // CHECK ALL - UNCHECK ALL Checkboxes

    $(".checkall").click(function () {
        $(this).closest('ul').find('input[type="checkbox"]').prop("checked", true);
    })
    $(".uncheckall").click(function () {
        $(this).closest('ul').find('input[type="checkbox"]').prop("checked", false);
    })

    //Hide the table row when X button is clicked
    $('.btn-danger').click(function() {
        //Find the parent row and hide it
        $(this).parents(".row").addClass('hide');
        //Hide the X button once more
        $(this).addClass("hide");
    });

   //Show another row when 'add' button is clicked
   $(".btn-add").click(function() {
    $(".fourth-row").removeClass('hide');
});


 //Add button delete when both select options and checkboxes are selected (USERGROUP 2)
 var select1 = $('.usergroup-1 .form-control');
 var checkboxes1 = $('#checkboxes-div-1 input[type="checkbox"]');

 select1.add(checkboxes1).on('change', function() {
    if (select1.val() != '' && checkboxes1.filter(":checked").length > 0) {
        $(".hidden-cross-2").removeClass("hide");
    } else {
        $(".hidden-cross-2").addClass("hide");
    }
});

    // //Add button delete when checkall is clicked 
    $(".check-first .checkall").click(function() {
        $(".hidden-cross-2").toggleClass('hide');
    });
    $(".check-first .uncheckall").click(function() {
        $(".hidden-cross-2").addClass('hide');
    });

    
    $(".check-second .checkall").click(function() {
        $(".hidden-cross-3").toggleClass('hide');
    });
    $(".check-second .uncheckall").click(function() {
        $(".hidden-cross-3").addClass('hide');
    });

    //Add button delete when both select options and checkboxes are selected (USERGROUP 2)
    var select2 = $('.usergroup-2 .form-control');
    var checkboxes2 = $('#checkboxes-div-2 input[type="checkbox"]');

    select2.add(checkboxes2).on('change', function() {
        if (select2.val() != '' && checkboxes2.filter(":checked").length > 0) {
            $(".hidden-cross-3").removeClass("hide");
        } else {
            $(".hidden-cross-3").addClass("hide");
        }
    });




// For the purposes of this test I have only added functionality for four tags
    // Usertitle tag button appear or disappear
    $("input.usertitle").click(function(){
        if($(this).is(':checked')){
            $('.usertitle-tag').show();
        }
        else{
            $('.usertitle-tag').hide();
        } 
    });

    // Comments tag button appear or disappear
    $("input.comments").click(function(){
        if($(this).is(':checked')){
            $('.comments-tag').show();
        }
        else{
            $('.comments-tag').hide();
        } 
    });

     // Topics tag button appear or disappear
     $("input.topics").click(function(){
        if($(this).is(':checked')){
            $('.topics-tag').show();
        }
        else{
            $('.topics-tag').hide();
        } 
    });

     // Login tag button appear or disappear
     $("input.logins").click(function(){
        if($(this).is(':checked')){
            $('.login-tag').show();
        }
        else{
            $('.login-tag').hide();
        } 
    });

    //Hide the clear selection until one of the inputs are checked
    $(".columns input").click(function(){
        if($(this).is(':checked')){
            $('.clear').show();
        }
        else{
            $('.clear').hide();
        } 
    });

   //Check all usernames

   $('.all-usernames input').click(function() {  
    if(this.checked) { 
        $('.over-table input').each(function() { 
            this.checked = true;                
        });
    }else{
        $('.over-table input').each(function() { 
            this.checked = false;             
        });         
    }
});




// Click on clear selection: all tags btns disaappear, checkboxes unchecked, table rows also disappear
$(".clear").click(function(event) {
    event.preventDefault();

$(this).hide();
    $(".tg-btns").hide();
    $(":checkbox.checks").attr("checked", false);
    $(".tbl-r").hide();
});



    // Click on each checkbox filter and its column appear in the table.
    // for the purposes of this test I only added html up until IP
    $("input.comments").change(function() {
        $(".comments-r").toggle(this.checked); 
        }).change();

    $("input.topics").change(function(){
        $(".topics-r").toggle(this.checked); 
    }).change();

    $("input.usergroup").change(function(){
        $(".usergroup-r").toggle(this.checked); 
    }).change();

    $("input.registration-date").change(function(){
        $(".registration-date-r").toggle(this.checked); 
    }).change();

    $("input.last-login").change(function(){
        $(".last-login-r").toggle(this.checked); 
    }).change();
    $("input.last-comment").change(function(){
        $(".last-last-comment-r").toggle(this.checked); 
    }).change();

    $("input.usertitle").change(function(){
        $(".usertitle-r").toggle(this.checked); 
    }).change();


    $("input.deleted-comments").change(function(){
        $(".deleted-comments-r").toggle(this.checked); 
    }).change();

    $("input.deleted-topics").change(function(){
        $(".deleted-topics-r").toggle(this.checked); 
    }).change();

    $("input.questions").change(function(){
        $(".questions-r").toggle(this.checked); 
    }).change();

    $("input.secondary").change(function(){
        $(".secondary-r").toggle(this.checked); 
    }).change();

    $("input.email").change(function(){
        $(".email-r").toggle(this.checked); 
    }).change();

    $("input.logins").change(function(){
        $(".logins-r").toggle(this.checked); 
    }).change();

    $("input.last-comment").change(function(){
        $(".last-comment-r").toggle(this.checked); 
    }).change();

    $("input.sso").change(function(){
        $(".sso-r").toggle(this.checked); 
    }).change();

    $("input.ip").change(function(){
        $(".ip-r").toggle(this.checked); 
    }).change();

    $("input.gender").change(function(){
        $(".gender-r").toggle(this.checked); 
    }).change();

    $("input.date-of-birth").change(function(){
        $(".date-of-birth-r").toggle(this.checked); 
    }).change();


    $("input.location").change(function(){
        $(".location-r").toggle(this.checked); 
    }).change();


    $("input.interest").change(function(){
        $(".interest-r").toggle(this.checked); 
    }).change();


    $("input.profession").change(function(){
        $(".profession-r").toggle(this.checked); 
    }).change();

    $("input.signature").change(function(){
        $(".signature-r").toggle(this.checked); 
    }).change();

    $("input.notes").change(function(){
        $(".notes-r").toggle(this.checked); 
    }).change();

    $("input.badges").change(function(){
        $(".badges-r").toggle(this.checked); 
    }).change();

    $("input.rep-received").change(function(){
        $(".rep-received-r").toggle(this.checked); 
    }).change();


    $("input.rep-given").change(function(){
        $(".rep-given-r").toggle(this.checked); 
    }).change();

    $("input.followers").change(function(){
        $(".rep-followers-r").toggle(this.checked); 
    }).change();
    $("input.following").change(function(){
        $(".rep-following-r").toggle(this.checked); 
    }).change();

    $("input.etc").change(function(){
        $(".etc-r").toggle(this.checked); 
    }).change();

//Click on created tags to delete row
    $(".usertitle-tag").click(function() {
        $(".usertitle-r").toggleClass("hide");
   
    });
     $(".comments-tag").click(function() {
        $(".comments-r").toggleClass("hide");
   
    });
      $(".topics-tag").click(function() {
        $(".topics-r").toggleClass("hide");
   
    });
       $(".login-tag").click(function() {
        $(".logins-r").toggleClass("hide");
   
    });



});






