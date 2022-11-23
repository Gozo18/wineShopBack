module.exports = {
    async afterCreate(event) {
        const { result } = event;

        let emailProducts = '';
        
        result.Orderedproduct.map((pro) => {
            const line = "<tr><td>" + pro.productname + "</td><td>" + pro.productquantity + "</td><td>" + pro.productprice + ",- Kč</td></tr>";
            emailProducts += line; 
        });

        const customerEmailTemplate = {
            from: 'info@vilapavlov.cz',
            subject: `Nová objednávka ${result.id}`,
            text: 'Vaše objednávka byla odeslána.',
            html: `<div>
            <div>
                <table border="0" cellpadding="0" cellspacing="0" class="x_1255290727body" style="border-collapse: separate;background-color: rgb(246,246,246);width: 100.0%;" width="100%" bgcolor="#f6f6f6">
                    <tbody>
                        <tr>
                            <td style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;" valign="top">
                                &nbsp;
                                <br>
                            </td>
                            <td class="x_1255290727container" style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;display: block;max-width: 580.0px;padding: 10.0px;width: 580.0px;margin: 0 auto;" width="580" valign="top">
                                <div class="x_1255290727content" style="box-sizing: border-box;display: block;margin: 0 auto;max-width: 580.0px;padding: 10.0px;">
                                    <table class="x_1255290727main" style="border-collapse: separate;background: rgb(255,255,255);border-radius: 3.0px;width: 100.0%;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td class="x_1255290727wrapper" style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;box-sizing: border-box;padding: 20.0px;" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;" valign="top">
                                                                    <p style="margin: 20.0px 0.0px;text-align: center;">
                                                                        <b>
                                                                            <span class="font" style="font-family:sans-serif">
                                                                                <span class="size" style="font-size: 22px; margin: 20px 0px; text-align: center;">
                                                                                    Vinařství Iris - objednávka odeslána!
                                                                                </span>
                                                                            </span>
                                                                        </b>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                Dobrý den,
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                potvrzujeme Vám přijetí objednávky. Pro způsob dopravy Vás budeme kontaktovat.
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                <b>Souhrn objednávky:</b>
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                                                                    <tr>
                                                                                        <td>Jméno:</td>
                                                                                        <td>${result.Firstname} ${result.Surname}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>E-mail:</td>
                                                                                        <td>${result.email}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Telefon:</td>
                                                                                        <td>${result.Phone}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Ulice:</td>
                                                                                        <td>${result.Street}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Město:</td>
                                                                                        <td>${result.Town}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>PSČ:</td>
                                                                                        <td>${result.Psc}</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                <b>Objednané produkty:</b>
                                                                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                                                                    <tr>
                                                                                        <td><b>Název</b></td>
                                                                                        <td><b>Množství</b></td>
                                                                                        <td><b>Cena</b></td>
                                                                                    </tr>
                                                                                    ${emailProducts}
                                                                                    <tr><td><b>Celková cena:</b></td><td></td><td><b>${result.Totalprice},- Kč</b>
                                                                                </table>
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                V případě jakýchkoliv dotazů nás neváhejte kontaktovat. 😊
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <br>
                                                                    </p>
                                                                    <div>
                                                                        S pozdravem
                                                                        <br>
                                                                    </div>
                                                                    <div>
                                                                        vinařství Iris
                                                                        <br>
                                                                    </div>
                                                                    <div>
                                                                        vinarstviiris.cz
                                                                        <br>
                                                                    </div>
                                                                    <div>
                                                                        +420 123 456 789
                                                                        <br>
                                                                    </div>
                                                                    <p>
                                                                        <br>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="x_1255290727footer" style="clear: both;margin-top: 10.0px;text-align: center;width: 100.0%;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="x_1255290727content-block" style="font-family: sans-serif;vertical-align: top;padding-bottom: 10.0px;padding-top: 10.0px;color: rgb(153,153,153);font-size: 12.0px;text-align: center;" valign="top" align="center">
                                                        <div>
                                                            <span class="colour" style="color:rgb(153, 153, 153)">
                                                                <span class="size" style="font-size: 12px; text-align: center;">
                                                                    vinařství Iris, Podhradní 180, Pavlov 692 01
                                                                </span>
                                                            </span>
                                                            <br>
                                                        </div>
                                                        <div>
                                                            <a href="https://www.vinarstviiris.cz" style="text-decoration: underline;color: rgb(153,153,153);font-size: 12.0px;text-align: center;" target="_blank">
                                                                vinarstviiris.cz
                                                            </a>
                                                            <br>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </td>
                            <td style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;" valign="top">
                                &nbsp;
                                <br>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <br>
                </div>
            </div>
            <div>
                <br>
            </div>
        </div>`,
          };


          const orderingEmailTemplate = {
            from: 'info@vilapavlov.cz',
            subject: `Nová objednávka ${result.id}`,
            text: 'Nová objednávka přijata.',
            html: `<div>
            <div>
                <table border="0" cellpadding="0" cellspacing="0" class="x_1255290727body" style="border-collapse: separate;background-color: rgb(246,246,246);width: 100.0%;" width="100%" bgcolor="#f6f6f6">
                    <tbody>
                        <tr>
                            <td style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;" valign="top">
                                &nbsp;
                                <br>
                            </td>
                            <td class="x_1255290727container" style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;display: block;max-width: 580.0px;padding: 10.0px;width: 580.0px;margin: 0 auto;" width="580" valign="top">
                                <div class="x_1255290727content" style="box-sizing: border-box;display: block;margin: 0 auto;max-width: 580.0px;padding: 10.0px;">
                                    <table class="x_1255290727main" style="border-collapse: separate;background: rgb(255,255,255);border-radius: 3.0px;width: 100.0%;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td class="x_1255290727wrapper" style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;box-sizing: border-box;padding: 20.0px;" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;" valign="top">
                                                                    <p style="margin: 20.0px 0.0px;text-align: center;">
                                                                        <b>
                                                                            <span class="font" style="font-family:sans-serif">
                                                                                <span class="size" style="font-size: 22px; margin: 20px 0px; text-align: center;">
                                                                                    Vinařství Iris - nová objednávka!
                                                                                </span>
                                                                            </span>
                                                                        </b>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                Dobrý den,
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                přijali jsme novou objednávku. Pro způsob dopravy kontaktujte zákazníka.
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                <b>Souhrn objednávky:</b>
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                                                                    <tr>
                                                                                        <td>Jméno:</td>
                                                                                        <td>${result.Firstname} ${result.Surname}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>E-mail:</td>
                                                                                        <td>${result.email}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Telefon:</td>
                                                                                        <td>${result.Phone}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Ulice:</td>
                                                                                        <td>${result.Street}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Město:</td>
                                                                                        <td>${result.Town}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>PSČ:</td>
                                                                                        <td>${result.Psc}</td>
                                                                                    </tr>
                                                                                </table>
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <span class="font" style="font-family:sans-serif">
                                                                            <span class="size" style="font-size: 14px; font-weight: normal; margin: 0px 0px 15px;">
                                                                                <b>Objednané produkty:</b>
                                                                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                                                                    <tr>
                                                                                        <td><b>Název</b></td>
                                                                                        <td><b>Množství</b></td>
                                                                                        <td><b>Cena</b></td>
                                                                                    </tr>
                                                                                    ${emailProducts}
                                                                                    <tr><td><b>Celková cena:</b></td><td></td><td><b>${result.Totalprice},- Kč</b>
                                                                                </table>
                                                                            </span>
                                                                        </span>
                                                                        <br>
                                                                    </p>
                                                                    <p style="font-weight: normal;margin: 0.0px 0.0px 15.0px;">
                                                                        <br>
                                                                    </p>
                                                                    <div>
                                                                        S pozdravem
                                                                        <br>
                                                                    </div>
                                                                    <div>
                                                                        vinařství Iris
                                                                        <br>
                                                                    </div>
                                                                    <div>
                                                                        vinarstviiris.cz
                                                                        <br>
                                                                    </div>
                                                                    <div>
                                                                        +420 123 456 789
                                                                        <br>
                                                                    </div>
                                                                    <p>
                                                                        <br>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="x_1255290727footer" style="clear: both;margin-top: 10.0px;text-align: center;width: 100.0%;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 100.0%;" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="x_1255290727content-block" style="font-family: sans-serif;vertical-align: top;padding-bottom: 10.0px;padding-top: 10.0px;color: rgb(153,153,153);font-size: 12.0px;text-align: center;" valign="top" align="center">
                                                        <div>
                                                            <span class="colour" style="color:rgb(153, 153, 153)">
                                                                <span class="size" style="font-size: 12px; text-align: center;">
                                                                    vinařství Iris, Podhradní 180, Pavlov 692 01
                                                                </span>
                                                            </span>
                                                            <br>
                                                        </div>
                                                        <div>
                                                            <a href="https://www.vinarstviiris.cz" style="text-decoration: underline;color: rgb(153,153,153);font-size: 12.0px;text-align: center;" target="_blank">
                                                                vinarstviiris.cz
                                                            </a>
                                                            <br>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </td>
                            <td style="font-family: sans-serif;font-size: 14.0px;vertical-align: top;" valign="top">
                                &nbsp;
                                <br>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <br>
                </div>
            </div>
            <div>
                <br>
            </div>
        </div>`,
          };

        try {
            await strapi.plugins.email.services.email.sendTemplatedEmail({
                to: `${result.email}`,
            },
            customerEmailTemplate,
            );
        } catch(err) {
            console.log(err);
        }

        try {
            await strapi.plugins.email.services.email.sendTemplatedEmail({
                to: `info@vilapavlov.cz`,
            },
            orderingEmailTemplate,
            );
        } catch(err) {
            console.log(err);
        }
    }
}