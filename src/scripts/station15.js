function displayList() {
  let fruitsElement =
    document.querySelectorAll("#fruits p"); /*fruitsのpタグの要素すべて取得*/
  let ul = document.createElement("ul");

  fruitsElement.forEach(function (p) {
    let li = document.createElement("li");
    li.textContent = p.textContent;
    ul.append(li);
    // このままだとulにappendしただけ
  });

  // fruits divの内容をulで置き換え
  const fruitsDiv = document.getElementById("fruits");
  fruitsDiv.innerHTML = ""; // 既存の<p>要素を削除
  fruitsDiv.append(ul); // 新しい<ul>を追加
}
