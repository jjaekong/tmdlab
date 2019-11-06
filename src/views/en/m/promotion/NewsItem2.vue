<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Obtained the non-exclusive license for shape memory polymer from the industrial-educational cooperation group of Yonsei University (21st of May, 2019)</h5>
                    <time>21st of May, 2019</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_2.jpg">
                    <p>
                        In order to develop and commercialize the human insertion stent using shape memory polymer, we have obtained the non-exclusive license on the patent: ‘a photo-crosslinkable shape memory polymer and manufacturing method thereof (patent registration number: 10-1906472) (PCT/KR2018/001190)’ retained by the industrial-educational cooperation group of Yonsei University. <br>
                        Its enforcement period is from the date of contract conclusion to the expiry date of the patent, and it is applied nationwide as well as all the other nations with the coming patent application after the contract conclusion. <br>
                        We have authorized with all the rights through this license involving product/method manufacture, facilitation, delegation and import. This has a significant meaning in earning the right to develop and commercialize the related products using shape memory polymer in the future.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open')
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/m/en/promotion/news');
		},
	}
}
</script>