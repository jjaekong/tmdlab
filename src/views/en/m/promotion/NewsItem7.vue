<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">[The Korea Economic Daily] New stent material reopening occlusion via body temperature (20th of November 2019)</h5>
                    <time>20th of November 2019</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_7.jpg">
                    <p>
                        <b>Healthcare startup: Kang Mi-Lan, CEO of TMD LAB</b><br><br>
                        <b>TMD LAB, in development of shape memory material</b><br>
                        <b>Longer lifespan and less infection than silicon</b><br><br>
						“We are developing shape memory polymer stent which could supplement the shortage of the existing stent (a thin tube for making opening at the point of occlusion) manufactured by silicon. It has longer lifespan than the silicon product, with less infection.”<br><br>
                        Kang Mi-Lan, CEO of TMD LAB, stated “Stent clinical test applying this shape memory polymer will be conducted by the end of next year, available for actual patient treatment.” Shape memory polymer is a substance which remembers a specific form, and turns to its form under a certain condition including temperature change.<br><br>
                        TMD LAB successfully lowered the returning temperature of shape memory polymer to body temperature, which had been originally returned by being exposed to 50 to 60 degree Celsius. This feature is applied for developing treatment material.<br><br>
                        TMD LAB, nested on Avison Biomedical Research Center (ABMRC) of Yonsei University Health System, started its business in October last year. It is in development of the lacrimal duct stent which unblocks the occluded tear duct, and of the bile duct stent which unblocks the bile duct occluded by gallstone or an ulcer. These are critical treatment substances required for the patients. Currently, silicon is prevalent for their material. Although the global companies including Medtronic and Johnson &amp; Johnson manufacture and make sales for the related products, it is Braintree Scientific of the U.S. only which manufactures its material. CEO Kang mentioned that “It is our goal to become a company like Braintree Scientific, with this shape memory polymer technology.”<br><br>
                        Shape memory polymer technology of TMD LAB is the research result of Sung Hak-Joon, professor from the department of medical engineering, Yonsei University College of Medicine. He formerly served as the professor also in Georgia Institute of Technology and Vanderbilt University, and is one of the leaders in the polymer research field. He recently published his technology at the international academic journal, involving innovative technology of extending the limit in the extent of returning rounds of shape memory polymer from 4 to 7.<br><br>
                        He had developed the melting stent model which is the first generation polymer stent, and transferred this to a global treatment material manufacture company. It made sales in European and South American regions. Polymer stent is now at the 3rd generation, however, the stent supporting vessel wall by unblocking the occlusion inside the vessel has a limit in reducing its negative effect including thrombus.<br><br>
                        This is why professor Sung engaged into the stent research with a new concept, of surrounding the vessel from outside. He stated “We are at a stage of developing the stent for outer vessel wall which can automatically surround the outside vessel surface, using shape memory polymer technology. This can be applied to many different fields such as a ureter where urine flows, eye socket implantation around the eye, lifting thread, etc.”<br><br>
                        Lacrimal duct stent development which unblocks the occluded tear duct is in the fastest pace at the moment. A thin thread-like stent is inserted to the body, and unblocks the occlusion by expanding when its temperature raises in accordance with the body temperature. This has a less infection rate also compared to the existing silicon material by 60 %, while making its surgical procedure much more comfortable. It remains at the animal experiment stage at the moment, and is expected to be applied to an actual patient via a clinical test by the end of next year. Technology transfer to a foreign company is also in a plan in a longer term.
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