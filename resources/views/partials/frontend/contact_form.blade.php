<div class="container">
    <div class="contact-flex">
        @include('partials.frontend.contact_info')
        <div class="form">
            <h2>Imate pitanje? Pošaljite nam poruku</h2>
            <form id="contact-form">
                @csrf
                <div class="form-control">
                    <label for="name">Vaše Ime (opciono)</label>
                    <input type="text" id="name" name="name">
                </div>
                <div class="form-control">
                    <label for="email">Vaša E-mail adresa</label>
                    <input type="email" id="email" name="email">
                    <span class="error-message email"></span>
                </div>
                <div class="form-control">
                    <label for="message">Poruka</label>
                    <textarea type="text" id="message" name="message"></textarea>
                    <span class="error-message message"></span>
                </div>
                <div id="ContactMessageResponse"></div>
                <div class="form-control">
                    <button class="btn" type="button" id="submit">Pošalji</button>
                </div>
            </form>
        </div>
    </div>
</div>