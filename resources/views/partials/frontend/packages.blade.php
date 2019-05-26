<section class="screen bg">
    <div class="container packages-container">
        <div>
            <h2>Naši Paketi</h2>
            <div class="packages">
                @foreach($packages as $package)
                <div class="package">
                    <div>
                        <h3>{{ ucwords($package->name) }}</h3>
                        <p>{{ $package->duration }} dana</p>
                        <p class="price">{{ $package->price }} &euro;</p>
                        {{--TODO refactor this when packages_attribues are implemented--}}
                        @if($package->id !== $promoPackageId)
                        <ul>
                            <li>{{ $package->follower_range }} pratilaca</li>
                            <li>smernice/saveti</li>
                            <li>podrška 24h</li>
                        </ul>
                        @endif
                    </div>
                    <div>
                        <button class="order-btn"
                                data-name="{{ ucwords($package->name) }}"
                                data-id="{{ $package->id }}">
                            {{ $package->id === $promoPackageId ? 'probaj besplatno' : 'poruči'}}
                        </button>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</section>