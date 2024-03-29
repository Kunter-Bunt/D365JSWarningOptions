function FormNotificationInfo(formContext) {
    formContext.ui.setFormNotification("Hello from INFO Form Notification", "INFO", "formNotification1");
    window.setTimeout(ClearFormNotification.bind(this, formContext), 5000);
}

function FormNotificationWarning(formContext) {
    formContext.ui.setFormNotification("Hello from WARNING Form Notification", "WARNING", "formNotification2");
    window.setTimeout(ClearFormNotification.bind(this, formContext), 5000);
}

function FormNotificationError(formContext) {
    formContext.ui.setFormNotification("Hello from ERROR Form Notification", "ERROR", "formNotification3");
    window.setTimeout(ClearFormNotification.bind(this, formContext), 5000);
}


function ClearFormNotification(formContext) {
    formContext.ui.clearFormNotification("formNotification");
}

function AttributeValidation(formContext, valid) {
    formContext.getAttribute("mwo_name").setIsValid(valid, "Hello from Attribute Validation");
    window.setTimeout(AttributeValidation.bind(this, formContext, true), 10000);
}


function ControlNotification(formContext) {
    formContext.getControl("mwo_name").setNotification("Hello from Control Validation" , "controlNotification");
    window.setTimeout(ClearControlNotification.bind(this, formContext), 5000);
}

function ClearControlNotification(formContext) {
    formContext.getControl("mwo_name").clearNotification("controlNotification");
}

function GlobalNotification(level) {
    var notification = {
        action: {
            actionLabel: "Visit Google",
            eventHandler: () => Xrm.Navigation.openUrl("https://www.google.com/")
        },
        level: level,
        message: "Hello from Global Notification",
        showCloseButton: true,
        type: 2
    };

    Xrm.App.addGlobalNotification(notification).then(
        (id) => {
            LogNotificationResult("Message set: " + id);
            window.setTimeout(ClearGlobalNotification.bind(this, id), 5000);
        }, 
        LogNotificationResult.bind(this, "Message error"));
}

function ClearGlobalNotification(id) {
    Xrm.App.clearGlobalNotification(id).then(
        LogNotificationResult.bind(this, "Message cleared"), 
        LogNotificationResult.bind(this, "Message clear error"));
}

function LogNotificationResult(message) {
    console.log(message);
}


function AlertDialog() {
    var alertStrings = { confirmButtonLabel: "OK", text: "Hello from Alert Dialog", title: "Dialog Title" };
    var alertOptions = { height: 120, width: 260 };
    Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
        function (success) {
            console.log("Alert dialog closed");
        },
        function (error) {
            console.log(error.message);
        }
    );
}

function ConfirmDialog() {
    var confirmStrings = { cancelButtonLabel: "Skip", confirmButtonLabel: "OK", text:"Hello from Confirm Dialog", title:"Dialog Title" };
    var confirmOptions = { height: 200, width: 450 };
    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function (success) {    
        if (success.confirmed)
            console.log("Dialog closed using OK button.");
        else
            console.log("Dialog closed using Cancel button or X.");
    });
}

function ErrorDialogCode() {
    var errorOptions = { errorCode: -2147135487, details: "Details from Error Dialog" };
    Xrm.Navigation.openErrorDialog(errorOptions).then(
        function (success) {
            console.log(success);        
        },
        function (error) {
            console.log(error);
        });
}

function ErrorDialogMessage() {
    var errorOptions = { message: "Hello from Error Dialog", details: "Details from Error Dialog" };
    Xrm.Navigation.openErrorDialog(errorOptions).then(
        function (success) {
            console.log(success);        
        },
        function (error) {
            console.log(error);
        });
}

// Notify("Hello from PowerFX", NotificationType.Information, 5000)