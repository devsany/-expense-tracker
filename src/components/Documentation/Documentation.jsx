import React, { useState } from "react";
import Footer from "../../HomeUiComponents/Footer";

const Documentation = () => {
  const [imageLink, setImageLink] = useState("");
  return (
    <div>
      <div className="bg-blue-950 h-screen">
        <select
          name=""
          id=""
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
        >
          <option value="">Select Item</option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/expenditure%20section%20daily%20input.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL2V4cGVuZGl0dXJlIHNlY3Rpb24gZGFpbHkgaW5wdXQucG5nIiwiaWF0IjoxNzMxMDgwOTE3LCJleHAiOjEwODM2ODcyNTcxN30.uBhrMzQmNevCLqN6LKP971Ti48NnN7tyR09bbwom7zw&t=2024-11-08T15%3A48%3A36.665Z">
            expenditure section daily input
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/home%20view%20clinet.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL2hvbWUgdmlldyBjbGluZXQucG5nIiwiaWF0IjoxNzMxMDgwOTQ1LCJleHAiOjM2NzU2ODg5ODU0NX0.WFUbPqhMyfqePGPRCopDUHbHLXdJlUft5IIQnlhvs9I&t=2024-11-08T15%3A49%3A04.752Z">
            home view clinet.png
          </option>
          <option
            value="
https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/home%20view%20monotonu.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL2hvbWUgdmlldyBtb25vdG9udS5wbmciLCJpYXQiOjE3MzEwODA5ODQsImV4cCI6Mjk2NTU3MzQzMzg0fQ.y60CquPjkvcYhyFi71iVtKo54UZ7XzeWNKW74GyliuM&t=2024-11-08T15%3A49%3A43.444Z"
          >
            home view monotonu.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/income.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL2luY29tZS5wbmciLCJpYXQiOjE3MzEwODEwMTUsImV4cCI6MjEwMTU3NDI5ODE1fQ.qQzXE6FMIBbzNepNRZzmCBs8fNcr3_n5Juaed_7yIUU&t=2024-11-08T15%3A50%3A14.871Z">
            income.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/login%20page.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL2xvZ2luIHBhZ2UucG5nIiwiaWF0IjoxNzMxMDgxMDUyLCJleHAiOjE5MzIxMTczNzg2NTJ9.fE9c_rr2Zmvirkw__gwUO9C-n70EK3qfeSqCsa3Ni2Q&t=2024-11-08T15%3A50%3A52.213Z">
            login page.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/primary%20income.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL3ByaW1hcnkgaW5jb21lLnBuZyIsImlhdCI6MTczMTA4MTA4NCwiZXhwIjozMDAxMDk0MjAyODR9.qpb4_3At_ZIYCWrU8lT4D2YNQoG-FUMMnNoxxi1X3ZY&t=2024-11-08T15%3A51%3A24.407Z">
            primary income.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/registration%20.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL3JlZ2lzdHJhdGlvbiAucG5nIiwiaWF0IjoxNzMxMDgxMTE0LCJleHAiOjMxMzA5NDI5OTE0fQ.fTyT27MX30KyBX4RINKqW9a2YwpFCTOMQxyictR6kLo&t=2024-11-08T15%3A51%3A54.147Z">
            registration .png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/Screenshot%202024-11-08%20210655.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL1NjcmVlbnNob3QgMjAyNC0xMS0wOCAyMTA2NTUucG5nIiwiaWF0IjoxNzMxMDgxMTM2LCJleHAiOjIwNDEwOTQyOTkzNn0.eiCkbx1ymaYSMKqkM4XoXcQa5t5M1Q-LS585Dd-3S7Q&t=2024-11-08T15%3A52%3A15.496Z">
            Screenshot 2024-11-08 210655.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/secondary%20section.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL3NlY29uZGFyeSBzZWN0aW9uLnBuZyIsImlhdCI6MTczMTA4MTE1NCwiZXhwIjoyMTE4OTIzNDE5NTR9.4hog3vjHwq3qp90AiRLznJxdBeFxmm6zAYwcuvULvUI&t=2024-11-08T15%3A52%3A34.161Z">
            secondary section.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/summary%20section.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL3N1bW1hcnkgc2VjdGlvbi5wbmciLCJpYXQiOjE3MzEwODExODIsImV4cCI6MjExMTg0ODk4NzgyfQ.SW6raS4CncCS83dKmseLi9DEy6EM11SFwba_ELA27nE&t=2024-11-08T15%3A53%3A02.207Z">
            summary section.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/userprofile.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL3VzZXJwcm9maWxlLnBuZyIsImlhdCI6MTczMTA4MTIwOSwiZXhwIjoyMTM2MjI5MzQwMDl9.eW_YenIEV3k_FJvz2I9QTTciZWRRRk9hn44splTEr5Y&t=2024-11-08T15%3A53%3A28.626Z">
            userprofile.png
          </option>
          <option value="https://knfagmyyzawmkmaqvvhm.supabase.co/storage/v1/object/sign/expenses-tracker/view%20expenditure%20section%20.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJleHBlbnNlcy10cmFja2VyL3ZpZXcgZXhwZW5kaXR1cmUgc2VjdGlvbiAucG5nIiwiaWF0IjoxNzMxMDgxMjI2LCJleHAiOjM5MzMzNTAyMDQyNn0.1bUH9iUZfjp1xGiPpy_rvQVau0GtiKhk9NyAvsGJLU0&t=2024-11-08T15%3A53%3A46.324Z">
            view expenditure section .png
          </option>
        </select>
        <div className="flex justify-center">
          <div className="w-[75vw]">
            <img src={imageLink} alt={imageLink} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
