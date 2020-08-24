function postToGoogle() {
    var field1 = $("#order_prdct").val();
    var field2 = $("#quantity").val();
    var field3 = $("#otherprdct").val();
    var field4 = $("#mobile_no").val();
    console.log(field1)


    

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdcLnJ3yfyPcIlSp9dURFh5iHBx2nozTnEs0HzYlde-sjNL5Q/formResponse?",
        data: {"entry.884968384": field1,"entry.1966057375": field2, "entry.323971090": field3, "entry.1623498990": field4},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
            
        },
        error: function(x, y, z)
            {

                alert("Successfully submited we will contact you soon Thank you!")
                location.reload();
                
            }
    });
    return false;
}

