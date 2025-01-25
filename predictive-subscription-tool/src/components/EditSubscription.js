// import React, { useState } from 'react';

// const EditSubscription = ({ subscription, onUpdate, onCancel }) => {
//   const [name, setName] = useState(subscription.name);
//   const [cost, setCost] = useState(subscription.cost);
//   const [frequency, setFrequency] = useState(subscription.frequency);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate({ ...subscription, name, cost, frequency });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Edit Subscription</h2>
//       <label>
//         Name:
//         <input value={name} onChange={(e) => setName(e.target.value)} required />
//       </label>
//       <label>
//         Cost ($):
//         <input
//           type="number"
//           value={cost}
//           onChange={(e) => setCost(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Frequency:
//         <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
//           <option value="monthly">Monthly</option>
//           <option value="yearly">Yearly</option>
//         </select>
//       </label>
//       <button type="submit">Save</button>
//       <button type="button" onClick={onCancel}>
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default EditSubscription;
