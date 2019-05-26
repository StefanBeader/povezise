@extends('layouts/frontend')

@section('page')

    <div>
        @include('partials/frontend/navigation')
        <div class="wrapper" id="sections-holder">
            <section class="screen">
                @include('partials/frontend/slider')
            </section>
            <section class="screen likeshare bg-image">
                <div class="content-grid container">
                    <div class="content">
                        <h2>Naša Usluga</h2>
                        <p>Najprirodniji i najefikasniji način da privučete pažnju na svoj Instagram profil, jeste da uđete u
                            interakciju sa drugim profilima. Nažalost to oduzima previše vremena!</p>
                        <p>Prepustite nama Vaše Instagram obaveze kao što su FOLLOW, UNFOLLOW, LIKE i gledajte kako Vaša baza
                            pratilaca raste iz dana u dan!</p>
                        <p>Svaka radnja koju preduzmemo je unapred isplanirana i dogovorena sa Vama!</p>
                        <p>Usluga o kakvoj ste sanjali je tu!</p>
                        <p>Uštedite vreme, ubrzajte rast na Instagramu, proširite svoj brend!</p>
                        <button class="btn order-btn" data-name="Promo" data-id="{{ $promoPackageId }}">Probaj Besplatno</button>
                    </div>
                </div>
            </section>
            @include('partials/frontend/packages')
            <section class="screen">
                @include('partials/frontend/contact_form')
            </section>
        </div>
        @include('partials/frontend/try_free_modal')
    </div>

@endsection