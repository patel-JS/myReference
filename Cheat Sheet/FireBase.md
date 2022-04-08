
>create project

>build 
    realtime database

    create database

    start in test mode

    enable


   const res = await fetch("https://j-pay-app-default-rtdb.firebaseio.com/userData.json",
        {
            method: "POST",
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify({firstName, lastName, phone, email, address, message}),
        });

