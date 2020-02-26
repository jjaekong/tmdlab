<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thesis on the shape memory polymer-based anastomotic device published at the international academic journal (Advanced Materials, IF 25.809)</h5>
                    <time>27th of August 2019</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_5.jpg">
                    <p>
                        TMD LAB Corporation developed an anastomotic device based on shape memory polymer which reacts to temperature, and successfully published the thesis of describing its effect at ‘Advanced Materials’ which is one of the top 3 journals in the material science field (title: Development of a Shape-Memory Tube to Prevent Vascular Stenosis). <br><br>
                        This study applies innovative polymer material (temperature-reactive shape memory polymer) and hydrodynamic principles (‘diffuser’ designing), apart from the existing typical concept of blood vessel material and conventional cylindrical graft design. It builds the graft with its diameter of 2 mm, and further reports success in its implementation by inserting it to the vessel system of a pig.<br><br>
                        Anastomotic device based on temperature-reactive shape memory polymer has its unique characteristic of extending the graft diameter in accordance with the cylinder direction. This prevents vessel deterioration when transplanting, and also prevents thrombosis by coating its surface with peptides which release nitric oxide. This was verified via the blood vessel of the pig during occlusive revascularization, where the vessel compatibility was improved for 18 days. This discovery not only helps developing the vessel graft design which applies shape memory polymer, but also confirms stability and effectiveness of the shape memory polymer when being inserted into the body.
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