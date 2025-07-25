export const E2E_USER_ID = "clxz1q7c7000hbqx5ckv4r82h";
export const E2E_WORKSPACE_ID = "ws_clrei1gld0002vs9mzn93p8ik";

export const E2E_LINK = {
  domain: "dub.sh",
  key: "test-click-tracking",
  url: "https://github.com/dubinc",
};

export const E2E_TRACK_CLICK_HEADERS = {
  referer: "https://dub.co",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
};

export const E2E_TAG = {
  id: "clvkopm8b0009nf98azsp9epk",
  name: "E2E Tests (DO NOT DELETE)",
  color: "red",
};

export const E2E_TAG_2 = {
  id: "tag_sfaXFOt0kFLtEV3Z5wtywbTl",
  name: "E2E Tests 2 (DO NOT DELETE)",
  color: "blue",
};

export const E2E_CUSTOMER_ID = "cm25onzuv0001s1bbxchrc0ae";
export const E2E_CUSTOMER_EXTERNAL_ID = "cus_jTrfVKYN3Buc3F80JoqBiY0g";
export const E2E_WEBHOOK_ID = "wh_MHR7sZXXtZ7keBaNYZ30rQ0v";

// Folders specific
export const E2E_WRITE_ACCESS_FOLDER_ID = "fold_1JP8FMYP08RGJKJB3S4DNYH13"; // Folder with write access
export const E2E_READ_ONLY_FOLDER_ID = "fold_1JP8FN462884CA6JJCVPAHAD4"; // Folder with read-only access
export const E2E_NO_ACCESS_FOLDER_ID = "fold_1JP8FNC96CRGVKAVYAEV80A1M"; // Folder with no access
export const E2E_READ_ONLY_FOLDER_LINK_ID = "link_1JP8FP63J6JSE85GRZVV2ZP1T"; // A link in read-only folder
export const E2E_NO_ACCESS_FOLDER_LINK_ID = "link_1JP8FQE9VSVBG2G2Z6EBZWYF6"; // A link in no access folder

// Rewards specific
export const E2E_CUSTOMER_EXTERNAL_ID_2 = "cus_pqc8qRtofpu6ZqvutyNDGAU2";
export const E2E_REWARD = {
  id: "rw_1JYPP77NNDG6TVPAJDKNZREQN",
  event: "sale",
  amount: 1000,
  modifiers: [
    {
      operator: "AND",
      amount: 3000,
      conditions: [
        {
          entity: "sale",
          attribute: "productId",
          operator: "equals_to",
          value: "premiumProductId",
        },
      ],
    },
  ],
};

// Discounts specific
export const E2E_CUSTOMER_WITH_DISCOUNT = {
  id: "cus_pNGuZQJrAKjzttQTZMI4a46y",
  externalId: "cus_PowZhxHqUvN8MSdszEElqsUx",
  email: "rural.yellow.takin@example.com",
};

export const E2E_DISCOUNT = {
  id: "disc_1JY5V6W88X71C7T5DMXPNWTCD",
  amount: 30,
  type: "percentage",
  maxDuration: 3,
  couponId: "XZuejd0Q",
  couponTestId: "2NMXz81x",
  default: true,
  description: null,
};

// Program
export const E2E_PROGRAM = {
  id: "prog_CYCu7IMAapjkRpTnr8F1azjN",
  domain: "getacme.link",
  url: "https://acme.dub.sh",
};

export const E2E_PARTNER = {
  id: "pn_H4TB2V5hDIjpqB7PwrxESoY3",
  tenantId: "4149092f-7265-4002-98d9-da9f8e67e1fb",
};
