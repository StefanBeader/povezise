<div id="tryFreeModal">
    <div class="modal-grid">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Prijava za <span id="package-name"></span> paket</h3>
                <span id="close-form" class="close">&#10006;</span>
            </div>
            <form id="order-form">
                <div class="modal-body">
                    <div class="form-control">
                        <label for="name">Ime i Prezime</label>
                        <input type="text" name="name" id="name"/>
                        <span class="error-message name"></span>
                    </div>
                    <div class="form-control">
                        <label for="insta">Instagram nalog (korisničko ime)</label>
                        <input type="text" name="instagram_handle" id="insta"/>
                        <span class="error-message instagram_handle"></span>
                    </div>
                    <div class="form-control">
                        <label for="howToContactDropdown">Kako da Vas kontaktiramo?</label>
                        <select name="contact_method" id="howToContactDropdown">
                            <option value="">Izaberite jednu od opcija</option>
                            <option value="viber">Viber</option>
                            <option value="whatsApp">WhatsApp</option>
                            <option value="sms">SMS</option>
                            <option value="mail">Mail</option>
                        </select>
                        <span class="error-message contact_method"></span>
                    </div>
                    <div class="form-control" id="howToContactInput"></div>
                    <div id="OrderResponseMessage"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="submit-order-form" class="btn">Pošalji</button>
                </div>
            </form>
        </div>
    </div>
</div>