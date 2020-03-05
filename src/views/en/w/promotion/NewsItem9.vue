<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>[Biospectator] TMD LAB challenges in developing the new concept stent using ‘shape <br>memory polymer’</h4>
					<span>17th of December 2019</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_9.jpg">
					<div class="news-body">
						<b>Company created by Sung Hak-Joon, professor Yonsei University College of Medicine, after returning to Korea in 2018 Securing safety and minimal invasion using shape memory polymer technology Pipeline to be expanded from the lacrimal duct stent</b><br><br>
                        TMD LAB challenges to the global market by developing the new integrated product via new material called ‘shape memory polymer’ including the stent inserted to the human body. Professor Sung Hak-Joon from Yonsei University College of Medicine founded TMD LAB in 2018, and determined that this polymer material is applicable to different fields at the medical sites. Shape memory polymer has a feature which reacts to specific stimulation (temperature) and returns to its original form. After decades of studying the related research, it is now at the brink of commercialization.<br><br>
                        Professor Sung stated “Shape memory polymer is invasive material with the purpose of minimizing the tissue deterioration when the medical device is inserted to the human body. This can be applied to various fields. Starting from the lacrimal duct stent, we will challenge to the new stent development including the extravascular and bile duct stents.”<br><br>
                        <b>◇TMD LAB ‘shape memory polymer’ available for fast recovery via body temperature</b><br><br>
                        Shape memory polymer (SMP) stands for a high molecular substance which can recover its original form from temporary deformation, once the specific condition is provided such as temperature. SMP is actively studied and applied in various industry fields, since it has advantages involving excellent recovery, low production cost, biocompatibility, etc.<br><br>
                        Applying and commercializing this shape memory polymer into the biological and medical industries however are a rare trial in a domestic sense as well as international. Professor Sung majored biomedical engineering in Georgia Institute of Technology and Vanderbilt University in the U.S. He devoted himself for a long time into this shape memory polymer research available for medical application, and secured the base technology for synthesizing shape memory polymer. 1st generation product was developed in 2010. Work continued for lowering the reactive temperature and for enhancing its recovery. Product is upgraded to the 3.5 generation, and it led to company creation as well.<br><br>
                        Professor Sung explained “Applying SMP can provide a role of minimizing tissue deterioration when the medical device is inserted to the body. SMP may recover the biological function of the subject after its application.” Product he developed applies the polymer which is certified by Food and Drug Administration in the U.S., with high biocompatibility and safety. <br><br>
                        SMP of TMD LAB has two main features. First, SMP is designed to react under the body temperature condition in order to be applied to the human body properly. Second, when applying to the body, its recovery is very fast from 0.5 seconds to minutes. It is even available for manipulating its recovery pace. Professor Sung mentioned that “Our SMP product has the fastest recovery rate close to the body temperature. Controlling the recovery rate in particular can be a crucial factor for medical device development.”<br><br>
                        Research team of professor Sung published the related thesis at ‘Advanced Materials (IF 25.809) in last August, with the title of ‘Development of Shape Memory Tube to Prevent Vascular Stenosis’. This holds the contents of applying the SMP-based technology which is programmed to react to body temperature, and of developing stents which are applicable to vessels with different sizes.<br><br>
                        <b>◇Entering the market via the lacrimal duct stent, developing the follow-up product involving extravascular stent</b><br><br>
                        First product of TMD LAB applying SMP is the lacrimal duct stent. Professor Sung introduced that “Lacrimal duct has a lower market feasibility, but a lower risk as well. We chose this lacrimal duct stent as our first pipeline with the purpose of entering this SMP concept with speed, which could be more or less unfamiliar.”<br><br>
                        Lacrimal duct is a thin tube under the eyelid, and plays a role of transporting tear. It is also called as the ‘tear duct’. This often gets occluded due to inflammation or micro dust. Professor Sung introduced “Lacrimal duct is where the waste is emitted, therefore is weak to infection. Our product can lower this infection rate by more than 70 %, compared to the existing silicon lacrimal duct stent.” There is a reference research result that most of the silicon lacrimal duct insertion lead to microorganism inflammation (biofilm) within 3 months.<br><br>
                        TMD LAB SMP lacrimal duct stent reacts to body temperature and expands the duct. TMD LAB confirmed its potential when this stent is inserted to a rabbit with an occluded tear duct. It also completed its SMP property evaluation compared to that out of silicon, in vitro cytotoxicity and biofilm inhibition evaluation, in vivo compatibility evaluation, etc. (published at Acta Biomaterialia in November 2019, with the title of : Nasolacrimal Stent with Shape Memory as an Alternative to Silicon Products)<br><br>
                        Kang Mi-Lan, CEO of TMD LAB, related to this matter introduced “We aim to show this product in 2021. Related procedures will be made through discussions with Ministry of Food and Drug Safety, with the authorization by the end of 2020.”<br><br>
                        Follow-up pipeline of TMD LAB is the ‘extravascular wrapping stent’, which covers the vessel from outside. Professor Sung said that “We can prevent vessel occlusion in a physical and biological sense by wrapping the vessel from outside. We confirmed its potential in the animal model that this extravascular wrapping stent reduces bloodstream vortex which is one of the causes for occlusion.”<br><br>
                        Applying this SMP makes it possible for many different product development including: lifting thread, plastic prosthetics, pancreatic cancer stent, ureter stent, ophthalmic implantation, etc. These are all potential pipelines for TMD LAB.<br><br>
                        <b>◇’New start’ in Korea with technology formerly expected for company creation in the U.S.</b><br><br>
                        Professor Sung won ‘Scientist of the year’ prize from National Science Foundation (NSF) of the U.S. in 2010 with the first generation SMP. He was suggested for company creation with the 3.5 generation technology from NSF, which led him to taking 2 years of training including the FDA consultation. Suggestion from Yonsei University followed in the meantime, and he finally returned to Korea and founded TMD LAB with Kang Mi-Lan (CEO, Ph.D in veterinary medicine) and Yi Se-Won (CTO, Ph.D in college of life science).<br><br>
                        Professor Sung stated “I found it more meaningful to create the company in Korea and to show the successful model. SMP has a great ripple effect since it can be constantly upgraded, and be applied to various fields. We plan to head out for the global market also, via technology transfer to the major companies worldwide.”
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