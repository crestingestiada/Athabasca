function formLabels(){$(".hbspt-form").length&&setTimeout((function(){$(".hbspt-form .hs-input").focus((function(){$(this).closest(".hs-form-field").addClass("has-focus")})).blur((function(){$(this).val()?$(this).closest(".hs-form-field").addClass("has-value"):$(this).closest(".hs-form-field").removeClass("has-focus")})),$(".hbspt-form .hs-input").on("change paste keyup",(function(){$(this).val()||$(this).closest(".hs-form-field").removeClass("has-value")})),$(".hbspt-form .hs-input").length&&$.each($(".hbspt-form .hs-input"),(function(){"text"!=$(this).prop("type")&&"email"!=$(this).prop("type")&&"tel"!=$(this).prop("type")||!$(this).val()||$(this).closest(".hs-form-field").addClass("has-focus")}))}),200)}let course=window.location.href.indexOf("course/")>-1;course&&$("#au-primary-nav li a").each((function(){let t=$(this),e=t.text();e.includes("Current students")&&t.removeClass("current"),e.includes("Programs and courses")&&course&&t.addClass("current")}));let programs=window.location.href.indexOf("programs/")>-1;function ariaAttributes(){$(".hs-form-radio input, .hs-form-booleancheckbox input").each((function(){$(this).attr("aria-checked","false"),$(".hs-form-radio input").click((function(){$(".hs-form-radio input").attr("aria-checked","false"),$(this).attr("aria-checked","true")})),$(".hs-form-booleancheckbox input").click((function(){$(this).is(":checked")?$(this).attr("aria-checked","true"):$(this).attr("aria-checked","false")})),$(".inputs-list").removeAttr("role"),$(".hs-form-radio").removeAttr("role")}))}programs&&$("#au-primary-nav li a").each((function(){let t=$(this);t.text().includes("Programs and courses")&&programs&&t.addClass("current")})),$.getJSON("https://s4xwkzuixf.execute-api.us-west-2.amazonaws.com/Prod/GetDates/FinancialAid/",(function(t){$("#apply").html("<strong>"+t.apply+"</strong>"),$("#start").html("<strong>"+t.start+"</strong>"),$("#info-due-date").html("<strong>"+t.apply+"</strong>"),$("#info-start-date").html("<strong>"+t.start+"</strong>")}));const currentYear=(new Date).getFullYear(),nextYear=currentYear+1,formattedYears=`${currentYear}/${nextYear.toString().slice(-2)}`,yearsSpan=document.getElementById("years");yearsSpan&&(yearsSpan.textContent=formattedYears);const currentTimeUTC=new Date,isDST=t=>{const e=t.getUTCFullYear(),s=new Date(e,2,8-new Date(e,2,1).getUTCDay()),a=new Date(e,10,1-new Date(e,10,1).getUTCDay());return t>=s&&t<a},mstTime=(new Date).toLocaleString("en-US",{timeZone:"America/Edmonton"}),mstDate=new Date(mstTime),hours=mstDate.getHours(),minutes=mstDate.getMinutes(),amOrPm=hours>=12?"p.m.":"a.m.",formattedHours=hours%12==0?12:hours%12,formattedMinutes=minutes.toString().padStart(2,"0"),formattedTime=`${formattedHours}:${formattedMinutes} ${amOrPm}`,timeSpan=document.getElementById("athabasca-current-time");timeSpan&&(timeSpan.textContent=formattedTime);