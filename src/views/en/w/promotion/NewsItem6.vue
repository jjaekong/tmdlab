<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Thesis on the shape memory polymer-based lacrimal duct stent published at the international academic journal (Acta Biomaterialia, IF 6.638)</h4>
					<span>7th of November 2019</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_6.jpg">
					<div class="news-body">
						TMD LAB Corporation published a thesis which describes an effect of the shape memory polymer-based lacrimal duct stent in case of nasolacrimal duct stenosis and occlusion, at the international academic journal ‘Acta Biomaterialia’ (title: Nasolacrimal stent with shape memory as an advanced alternative to silicone products). Nasolacrimal duct stenosis and occlusion is a disease where the path which tear flows is blocked. Tear is not released properly, and vision is blurred when the tear is gathered and overflows, creating discomfort in daily life. Acute dacryocystitis occurs when the inflammation gets severe, which leads to a physical surgery. Number of patients with this disease is rapidly growing recently, since micro dust has become a social issue.<br><br>
                        Silicon tube used for the existing stent in expanding the nasolacrimal duct has different negative effects involving granuloma formation, nasal cavity bleeding, tube dislocation, conjunctiva stimulation, biofilm formation etc. It also shows a very low level of satisfaction due to the patient discomfort in the surgical procedure, as well as dislocation and infection issues. Thus we developed the shape memory polymer-based lacrimal duct tube, in order to overcome the negative effects of the silicon-based tube which is currently used in a clinical sense, to lower the dependence rate on its import, and further to increase profit based on the superiority of this functional material.<br><br>
                        This study applies the shape memory polymer technology, and develops the graft which is inserted to the blocked lacrimal duct of a rabbit. This graft is able to secure the lacrimal duct by expanding itself via body temperature. Thesis is reported based on the preclinical study result from our research department, confirming properties of shape memory polymer compared with silicon, in vitro cytotoxicity and biofilm formation inhibition, and in vivo effectiveness.
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn"  @click="close()">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open');
		var self = this;
		window.setTimeout(function() {
			self.$el.style.display = 'flex'
		}, 500)
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/w/en/promotion/news');
		},
	}
}
</script>