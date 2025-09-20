"use client";

import React from "react";

import { getUser, UserEntry } from "../../api";
import Button from "../button/button";
import Cards from "../cards/cards";
import Screen from "../screen/screen";

export default function Interface() {
  const [action, setAction] = React.useState("");
  const [activeCard, setActiveCard] = React.useState("");
  const [buttonValue, setButtonValue] = React.useState("");
  const [buttonText, setButtonText] = React.useState(["", "", "", "", "", "", "", ""]);
  const [screenText, setScreenText] = React.useState("Welcome to the ATM");
  const [showInput, setShowInput] = React.useState(false);
  const [inputType, setInputType] = React.useState("password");
  const [inputValue, setInputValue] = React.useState("");
  const [isTitle, setIsTitle] = React.useState(true);
  const [user, setUser]: Array<UserEntry | Function> = React.useState({ name: "", pin: "", balance: 0, card: "" });

  const setInitialState = () => {
    setAction("");
    setButtonText(["", "", "", "", "", "", "", "Enter PIN"]);
    setButtonValue("");
    setIsTitle(true);
    setScreenText("Welcome to the ATM");
    setShowInput(false);
    setInputType("password");
    setInputValue("");
  };

  React.useEffect(() => {
    setInitialState();
  }, []);

  /*
   * Show the main menu. Passing "name" is a quick hack to avoid showing "undefined" or a previous name
   * when the state update hasn't finished yet.
   */
  const showMainMenu = (name?: String) => {
    setInitialState();
    setIsTitle(false);
    setScreenText(`Hi ${name || user.name}!\nPlease make a choice...`);
    setButtonText(["", "", "Withdraw", "Deposit", "", "Exit", "Balance", "Re-Enter PIN"]);
  };

  /*
   * We're using a single input for everything, so we decide what action to take based on the action type.
   */
  const handleInput = () => {
    let newUser;
    let amount: number;
    let newBalance: number;

    switch (action) {
      case "Deposit":
        amount = parseFloat(inputValue);

        if (amount <= 0) {
          setScreenText("You must specify a positive amount to deposit.");
          setButtonValue(""); // Make sure the next click triggers the loop properly.
        } else {
          newBalance = user.balance + amount;
          setUser((oldUser: UserEntry) => ({
            ...oldUser,
            balance: newBalance,
          }));

          setShowInput(false);
          setScreenText(`Deposit complete. Your current balance is:\n\n$${newBalance.toFixed(2)}`);
          setButtonText(["", "", "", "", "", "Exit", "", "Main Menu"]);
        }
        break;

      case "Enter PIN":
      case "Re-Enter PIN":
        newUser = getUser(inputValue);

        if (newUser) {
          setUser(newUser);
          setActiveCard(newUser.card);
          showMainMenu(newUser.name);
        } else if (inputValue !== "") {
          setScreenText("Invalid PIN. Please try again:");
        }

        break;

      case "Withdraw":
        amount = parseFloat(inputValue);

        if (amount > user.balance) {
          setScreenText("The requested amount exceeds your current account balance.");
          setButtonValue(""); // Make sure the next click triggers the loop properly.
        } else {
          newBalance = user.balance - amount;
          setUser((oldUser: UserEntry) => ({
            ...oldUser,
            balance: newBalance,
          }));

          setShowInput(false);
          setScreenText(`Withdrawal complete. Your current balance is:\n\n$${newBalance.toFixed(2)}`);
          setButtonText(["", "", "", "", "", "Exit", "", "Main Menu"]);
        }
        break;

      default:
        break;
    }
  };

  /*
   * The main loop for the machine. We can decide what to do based on the button pressed.
   */
  React.useEffect(() => {
    switch (buttonValue) {
      case "Balance":
        setScreenText(`Your current balance is:\n\n$${user.balance.toFixed(2)}`);
        setButtonText(["", "", "", "", "", "Exit", "", "Main Menu"]);
        break;

      case "Deposit":
        setScreenText("Please enter the amount you wish to deposit:");
        setAction(buttonValue);
        setInputValue("");
        setInputType("number");
        setShowInput(true);
        setButtonText(["", "", "", "", "", "", "Enter", "Main Menu"]);
        break;

      case "Enter":
        handleInput();
        break;

      case "Enter PIN":
      case "Re-Enter PIN":
        setAction(buttonValue);
        setActiveCard("");
        setInputValue("");
        setInputType("password");
        setShowInput(true);
        setIsTitle(false);
        setScreenText("Please enter your PIN below:");
        setButtonText(["", "", "", "", "", "", "Enter", ""]);
        break;

      case "Exit":
        setActiveCard("");
        setInitialState();
        break;

      case "Main Menu":
        showMainMenu();
        break;

      case "Withdraw":
        if (user.balance <= 0) {
          setScreenText("Your account must have a positive balance to withdraw funds.");
          setButtonText(["", "", "", "", "", "Exit", "", "Main Menu"]);
        } else {
          setScreenText("Please enter the amount you wish to withdraw:");
          setAction(buttonValue);
          setInputValue("");
          setInputType("number");
          setShowInput(true);
          setButtonText(["", "", "", "", "", "", "Enter", "Main Menu"]);
        }

        break;

      default: // inactive button, do nothing
        break;
    }
  }, [buttonValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setButtonValue("Enter");
  };

  return (
    <>
      <div className="self-center py-[9px]">
        <Cards activeCard={activeCard} />
      </div>
      <div className="relative">
        <div className="">
          <Screen
            inputType={inputType}
            inputValue={inputValue}
            isTitle={isTitle}
            onSubmit={submitForm}
            showInput={showInput}
            setInputValue={setInputValue}
            text={screenText}
          />
        </div>
        <div className="absolute top-[95px] left-[-54px] flex flex-col items-start">
          <Button isLeft onClick={setButtonValue} text={buttonText[0]} />
          <Button isLeft onClick={setButtonValue} text={buttonText[1]} />
          <Button isLeft onClick={setButtonValue} text={buttonText[2]} />
          <Button isLeft onClick={setButtonValue} text={buttonText[3]} />
        </div>
        <div className="absolute top-[95px] right-[-54px] flex flex-col items-end">
          <Button onClick={setButtonValue} text={buttonText[4]} />
          <Button onClick={setButtonValue} text={buttonText[5]} />
          <Button onClick={setButtonValue} text={buttonText[6]} />
          <Button onClick={setButtonValue} text={buttonText[7]} />
        </div>
      </div>
    </>
  );
}
