export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} n alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang Rp{Math.abs(friend.balance)} ke kamu.
        </p>
      )}
      {friend.balance === 0 && (
        <p className="black">Kamu dan {friend.name} tidak ada hutang.</p>
      )}
      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "Deselect" : "Select"}
      </button>
    </li>
  );
}
