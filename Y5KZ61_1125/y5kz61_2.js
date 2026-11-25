$(document).ready(function()
{
    $("#load_data").click(function()
    {
        $("#area").html("");

        $("#area").append("<h2>MISKOLCI EGYETEM</h2>");

        $.getJSON("y5kz61_orarendfull.json")
    }
)
})