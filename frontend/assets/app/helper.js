request = {}

request.post = (url,param={},successFunc,errorFunc)=>{
    $.ajax(url,{
        method : "POST",
        dataType:"json",
        contentType:"application/json",
        data: JSON.stringify(param),
        success:successFunc?successFunc:()=>{
            alert("request success")
        },
        error:errorFunc?errorFunc:(jqXhr, textStatus, errorMessage)=>{
            alert(`request error ${textStatus} detail : ${errorMessage}`)
        }
    })

}
request.get = (url,param={},successFunc,errorFunc)=>{
    $.ajax(url,{
        method : "GET",
        dataType:"json",
        contentType:"application/json",
        data: param,
        success:successFunc?successFunc:()=>{
            alert("request success")
        },
        error:errorFunc?errorFunc:(jqXhr, textStatus, errorMessage)=>{
            alert(`request error ${textStatus} detail : ${errorMessage}`)
        }
    })

}
request.put = (url,param={},successFunc,errorFunc)=>{
    $.ajax(url,{
        method : "PUT",
        dataType:"json",
        contentType:"application/json",
        data: JSON.stringify(param),
        success:successFunc?successFunc:()=>{
            alert("request success")
        },
        error:errorFunc?errorFunc:(jqXhr, textStatus, errorMessage)=>{
            alert(`request error ${textStatus} detail : ${errorMessage}`)
        }
    })

}
request.delete = (url,param={},successFunc,errorFunc)=>{
    $.ajax(url,{
        method : "DELETE",
        dataType:"json",
        contentType:"application/json",
        data: JSON.stringify(param),
        success:successFunc?successFunc:()=>{
            alert("request success")
        },
        error:errorFunc?errorFunc:(jqXhr, textStatus, errorMessage)=>{
            alert(`request error ${textStatus} detail : ${errorMessage}`)
        }
    })

}