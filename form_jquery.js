$(document).ready(function(){
  $(".submit").click(function(){

    // name validation
    var name = $(".name").val();
    var age = $(".age").val();
    var email = $(".email").val();
    var hobby = $(".hobby").val();
    var password = $(".password").val();
    var cpassword = $(".cpassword").val();
    var uname = $(".uname").val();
    var img = $('.image').val();
    
    if(name == ""  && age == "" && email == "" && password == "" && cpassword == "" && hobby == "" && uname == ""){
      $('.name_msg').html("Field is required").css("color","red");
      $('.hobby_msg').html("Field is required").css("color","red");
      $('.age_msg').html("Field is required").css("color","red");
      $('.email_msg').html("Field is required").css("color","red");
      $('.pwd_msg').html("Field is required").css("color","red");
      $('.cpwd_msg').html("Field is required").css("color","red");
      $('.uname_msg').html("Field is required").css("color","red");
    }
    else{
      $('.name_msg').html("");
      $('.hobby_msg').html("");
      $('.age_msg').html("");
      $('.email_msg').html("");
      $('.pwd_msg').html("");
      $('.cpwd_msg').html("");
      $('.uname_msg').html("");
    }

    $('.name_data').html(name);
    $('.age_data').html(age);
    $('.email_data').html(email);
    $('.uname_data').html(uname);
    $('.hobby_data').html(hobby);
    $('.img_data').html(image);
    $('.study_data').html(std);
  });
});

// name only character allowed 
$(document).ready(function(){
  $(".name").keypress(function (e) {
     if (e.which > 48 && e.which < 57) {
        $('.name_msg').html("Only character Allowed").show().css("color","red");
    }
    else{
      $('.name_msg').html("");
    }
  });
});


// age only digits allowed 
$(document).ready(function(){
  $(".age").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      $('.age_msg').html("Only number Allowed").show().css("color","red");
    }
    else{
      $('.age_msg').html("");
    }
  });
});

// email validation 
$(document).ready(function(){
  $(".email").on('change',function () {    
    var inputvalues = $(this).val();    
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
    if(!regex.test(inputvalues)){    
      $('.email_msg').html("enter @ and dot sign").show().css("color","red");
      return regex.test(inputvalues);    
    } 
    else{
      $('.email_msg').html("");
    }   
  }); 
});

// password validation 
$(document).ready(function(){
    $(".password").on('keyup', function(){
      var number = /([0-9])/;
      var alphabets = /([a-zA-Z])/;
      var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
      if ($('.password').val().length < 6) {
          $('.pwd_msg').html("should be atleast 6 characters").css("color","red");
      } else {
          if ($('.password').val().match(number) && $('.password').val().match(alphabets) && $('.password').val().match(special_characters)) {
              $('.pwd_msg').html("");
          } else {
              $('.pwd_msg').html("should include alphabets, numbers and special characters or some combination").css("color","red");
          }
      }
    });
});

// Confirm password validation 
$(document).ready(function(){
  $(".cpassword").on('keyup', function(){
    var password = $(".password").val();
    var cpassword = $(".cpassword").val();
    if (password != cpassword)
        $(".cpwd_msg").html("Password does not match !").css("color","red");
    else
        $(".cpwd_msg").html("Password match !").css("color","red");
   });
});

// Username validation 
$(document).ready(function(){
  $('.uname').keypress(function (e) {
    if (e.which === 32)
    {
      $(".uname_msg").html("White space is not allow!").css("color","red");
    }
    else{
      $(".uname_msg").html("");
    }
  })
});

// hobby validation 
$(document).ready(function(){
  $(".hobby").on('keyup', function(){
    if ($('.hobby').val().length >= 2 && $('.hobby').val().length < 8) {
      $('.hobby_msg').html("enter atleast 8 characters").css("color","red");
    }
    else{
      $('.hobby_msg').html("").css("color","red");
    }
  });
});

// study detail 
$(document).ready(function(){
  $(".study").click(function(){
      var std = prompt("enter standard","");
      if(std != null){
        $(".std").html(std);
      }

      var per = prompt("enter percentage","");
      if(per != null){
        $(".per").html(per);
      }
  });
});

$(document).ready(function(){
    $(".hide").hide();

    $(".study").click(function(){
    $(".hide").show();
  });

  $(".remove").click(function(){
      $(".std").remove();
      $(".per").remove();
  });
});

// image vaildation
$(document).ready(function(){
  $('.image').change(function() {
    var fileInput = $(this);

    if (fileInput.length && fileInput[0].files && fileInput[0].files.length) {
      var url = window.URL;
      var image = new Image();

      image.onload = function() {
        $('.img_msg').html("success").css("color","red");
      };
      image.onerror = function() {
        $('.img_msg').html("file extension is not valid").css("color","red");
      };
      image.src = url.createObjectURL(fileInput[0].files[0]);
    }
  });
});

// display image

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}





  