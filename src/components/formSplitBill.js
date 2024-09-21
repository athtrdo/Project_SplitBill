import { useState } from "react";

export default function FormSplitBill({ selectedFriend,onSplitBill }) {
  const [amount, setAmout] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying,setWhoIsPaying] = useState("user")


  function handleSubmit(e){
    e.preventDefault();
    if(!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }
  
  return (
    <form className="form-split-bill" action="" onSubmit={handleSubmit}>
      <h2>Patungan Bareng bersama {selectedFriend.name}</h2>

      <label htmlFor="">💸Total Tagihan</label>
      <input type="text" value={amount} onChange={(e) => setAmout(e.target.value)} />

      <label htmlFor="">🙋Tagihanmu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">🙋‍♂️Tagihan ke {selectedFriend.name}</label>
      <input type="text" value={new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(friendBill)} disabled />

      <label htmlFor="">🙆‍♂️Ditalangin oleh y</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Add</button>
    </form>
  );
}
