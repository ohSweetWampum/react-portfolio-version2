import React from "react";
import "../styles/boldFont.css";
const myPicture = process.env.PUBLIC_URL + "./images/biopic2.png";
function OperativesProfile() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 h-screen w-full bg-opacity-10 bg-white">
      <div className="col-start-1 col-span-1 row-start-1 row-span-1 bold  bg-transparent border font-bold border-black flex items-start justify-end p-2">
        First Name
        <p>Matthew</p>
      </div>
      <div className="col-start-2 col-span-1 row-start-1 row-span-1 bold bg-transparent font-bold border border-black flex items-start justify-end p-2">
        Last Name
        <p>Gibson</p>
      </div>
      <div className="col-start-3 col-span-1 row-start-1 row-span-1 bold bg-transparent border border-black font-bold flex items-start justify-end p-2">
        Alias
        <p>Matt</p>
      </div>
      <div className="col-start-1 col-span-2 row-start-2 row-span-1 bold bg-transparent border border-black font-bold flex items-start justify-end p-2">
        Place of Birth
        <p>Oshkosh, WI</p>
      </div>
      <div className="col-start-3 col-span-1 row-start-2 row-span-1 bold bg-transparent border border-black font-bold flex items-start justify-end p-2">
        Date of Birth
        <p>09/06/1995</p>
      </div>
      <div className="col-start-1 col-span-3 row-start-3 row-span-1 bold bg-transparent border border-black font-bold flex items-start justify-end p-2">
        Education
        <p>
          eorjfgoiewrjfoierjfioewjfoeiwjfowiefjeoiwfjewoijfoewijfskdjnfkjewnfjwenfkje
        </p>
      </div>
      <div className="col-start-1 col-span-2 row-start-4 row-span-1 bold bg-transparent border border-black font-bold flex items-start justify-end p-2">
        Operational Background
        <p>
          dsfwffdsdvdfbdrtowhfoiweofijwioefjioewjfoiwejfoiewjfoiejfiowejfoiwejfoijweoifjweoifjoeiwjfoiewjfioewjfioewjfiowejfiowejfioewjfiowejfoiwejfoiejwoifjewoifjewiojfioewjfoiewjfoiwejfoiewjfioewjfoiwejfioewjfiowejfioewjfoiwefjoiejfoiwejfiowejfioewjfoiewjfioewjfoiewjfoiewjfiowejfoiwejfoiewjfoiwejfoiewjfoiwejfoiewjfiowejfoiewjfoiewjfoiwejfoiwejfoiwejfioewjfoiwejfioejfoiwejfoiwefjoiwejfoiwejfoiwejfoiewjfiowjefoiwjeoifjweoifjewoijfoiwefjeiowjfwioefjeiowjfweiofjioewjfoiewjfioewjfioewjfoiewjfoiwejfoiewjfioewfjioewjfoiewjfiowefjoiewfjoiewjfoiewjfoiwejfoweifjowiejfoiwjefoiwejfoiwejfoiwefjoiewfjwoeijefoiwejfiowejfoiwejfoiwejfoiwejfiowejfiowejfoiwejfoiewjfoiewjfoiewjfoiewjfoiwefjoeiwjfoiewjfoiwejfoiwejfoiwejfwoiefjweiofjweoifjioewjfweoifjweoifjweoifjoiwejfweoifjewoifjweoijfioewjfioewjfioewjfoiewjfoiwejfoiwefjoiewjfoiewjfewoijfioewjfweoifjweoifjweoijfeoiwjfioewjfoeiwjfoeiwjfoiewjfioewjfieowfjeowijfewoifjweoijfiowejfoiwej
        </p>
      </div>
      <div className="col-start-3 col-span-1 row-start-4 row-span-1 bg-transparent border border-black">
        <img
          src={myPicture}
          alt="Agent"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default OperativesProfile;
