// 新增價格資料

document.getElementById("priceForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        date: document.getElementById("date").value,
        product_name: document.getElementById("product_name").value,
        price: document.getElementById("price").value

    };

    try {

        const res = await fetch("/api/prices", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await res.json();

        if(result.success){

            alert("新增成功！");

            document.getElementById("priceForm").reset();

            loadData();

        }

    } catch(error){

        console.error(error);

        alert("新增失敗");

    }

});

// 載入全部資料

async function loadData(){

    try{

        const res = await fetch("/api/prices");

        const data = await res.json();

        renderTable(data);

    }catch(error){

        console.error(error);

    }

}

// 搜尋資料

async function searchData(){

    const keyword =
    document.getElementById("search").value;

    try{

        const res =
        await fetch(
            `/api/search?keyword=${keyword}`
        );

        const data =
        await res.json();

        renderTable(data);

    }catch(error){

        console.error(error);

    }

}

// 顯示表格

function renderTable(data){

    let html = "";

    data.forEach(item => {

        html += `
        <tr>
            <td>${item.date}</td>
            <td>${item.product_name}</td>
            <td>$${item.price}</td>
        </tr>
        `;

    });

    document.getElementById("result")
    .innerHTML = html;

}

// 網頁載入時自動取得資料

loadData();