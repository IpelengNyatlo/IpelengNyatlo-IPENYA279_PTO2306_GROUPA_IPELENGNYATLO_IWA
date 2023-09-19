// scripts.js
// I put curly brackets around the variables 'company' and 'year', and fixed the 'form' spelling to 'from'

import { company } from "/interactive-web-apps/IWA3/IWA_3.3/configuration.js";
import { year } from "/interactive-web-apps/IWA3/IWA_3.3/configuration.js";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;
