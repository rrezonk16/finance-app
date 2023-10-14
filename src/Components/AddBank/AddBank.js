import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AddBank = () => {
  const [bank, setBank] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFormSubmit = () => {
    // Save data to local storage
    const data = {
      bank,
      amount,
      phoneNumber
    };
    localStorage.setItem('bankData', JSON.stringify(data));
    localStorage.setItem('isbank', true);
    // Navigate to the home page after saving the data
    navigate('/');
  };
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <form className="max-w-md mx-auto p-6 bg-bgInactive border-border rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="bank" className="block text-white text-sm font-bold mb-2">
            Bank:
          </label>
          <select
            id="bank"
            value={bank}
            onChange={handleBankChange}
            className="w-full p-2 bg-bgSelect text-white border rounded outline-none"
          >
            <option value="">Select a bank</option>
            <option value="Procredit Bank">Procredit Bank</option>
            <option value="Paysera">Paysera</option>
            <option value="One For">One For</option>
            <option value="Raiffeisen Bank">Raiffeisen Bank</option>
            <option value="BKT">BKT</option>
            <option value="TEB">TEB</option>

          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-white text-sm font-bold mb-2">
            Amount of Money:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-2 bg-bgSelect text-white border rounded outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-white text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="w-full p-2 bg-bgSelect text-white border rounded outline-none"
          />
        </div>
        <button
          type="button"
          onClick={handleFormSubmit}
          className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none"
        >
          Save Data to Local Storage
        </button>
      </form>
    </div>
  );
};

export default AddBank;
