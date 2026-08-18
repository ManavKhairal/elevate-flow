import glob

contact_html = """
        <!-- CONTACT SECTION -->
        <section id="contact" class="py-24 relative z-10 border-t border-electric/20 bg-gradient-to-b from-dark/60 to-panel/80 backdrop-blur-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="glass-panel rounded-2xl overflow-hidden tech-border fade-in-up visible">
                    <div class="grid grid-cols-1 lg:grid-cols-5">
                        <!-- Contact Info Sidebar -->
                        <div class="lg:col-span-2 bg-black/40 p-10 text-white flex flex-col justify-between border-r border-electric/20">
                            <div class="relative z-10">
                                <h3 class="text-2xl font-bold mb-4 text-white font-heading tracking-wide">Let's fix your business.</h3>
                                <p class="text-slate-400 mb-10 font-light text-sm">Schedule a free chat. Tell us what's slowing your business down, and we'll tell you if we can fix it.</p>
                                
                                <div class="space-y-8">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 bg-electric/10 rounded-full border border-electric/30 flex items-center justify-center text-electric">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <p class="text-xs text-slate-500 tracking-widest mb-1 uppercase font-bold">Email Us</p>
                                            <a href="mailto:hello@elevateflow.in" class="text-sm hover:text-electric transition-colors glow-text-blue font-semibold">hello@elevateflow.in</a>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 bg-energy/10 rounded-full border border-energy/30 flex items-center justify-center text-energy">
                                            <i class="fas fa-globe"></i>
                                        </div>
                                        <div>
                                            <p class="text-xs text-slate-500 tracking-widest mb-1 uppercase font-bold">Website</p>
                                            <a href="https://elevateflow.in" class="text-sm hover:text-energy transition-colors glow-text-orange font-semibold">elevateflow.in</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Contact Form (Netlify ready) -->
                        <div class="lg:col-span-3 p-10 lg:p-14 bg-dark/60">
                            <h3 class="text-2xl font-bold text-white mb-6 font-heading">Request a Free Consultation</h3>
                            <form name="consultation" method="POST" action="/success.html" data-netlify="true" class="space-y-6">
                                <input type="hidden" name="form-name" value="consultation">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">Full Name</label>
                                        <input type="text" name="name" required="" class="w-full px-4 py-3 bg-dark/50 border border-electric/30 rounded text-white focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">Work Email</label>
                                        <input type="email" name="email" required="" class="w-full px-4 py-3 bg-dark/50 border border-electric/30 rounded text-white focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all text-sm">
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">Business Type / Industry</label>
                                    <input type="text" name="industry" placeholder="e.g. Dental Clinic, Retail Store, Agency" class="w-full px-4 py-3 bg-dark/50 border border-electric/30 rounded text-white focus:border-electric focus:ring-1 focus:ring-electric outline-none transition-all text-sm">
                                </div>
                                
                                <div>
                                    <label class="block text-xs font-bold tracking-wider text-energy uppercase mb-2">What is your biggest bottleneck right now?</label>
                                    <textarea name="message" rows="4" required="" class="w-full px-4 py-3 bg-dark/50 border border-electric/30 rounded text-white focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-all text-sm resize-none"></textarea>
                                </div>
                                
                                <button type="submit" class="w-full bg-electric/20 hover:bg-electric text-white border border-electric font-bold py-4 rounded transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] tracking-wide uppercase">
                                    Submit Request
                                </button>
                                <p class="text-xs text-center text-slate-500 mt-4">We respect your privacy. No spam, ever.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

files = glob.glob("blog*.html")
for file in files:
    with open(file, "r") as f:
        content = f.read()

    # If it already has #contact section, skip
    if 'id="contact"' not in content:
        # Insert before </div>\n\n    <!-- Script
        # But blog.html has </div>\n\n    <!-- INTERACTIVITY SCRIPT -->
        if "<!-- INTERACTIVITY SCRIPT -->" in content:
            content = content.replace("    </div>\n\n    <!-- INTERACTIVITY SCRIPT -->", contact_html + "\n    </div>\n\n    <!-- INTERACTIVITY SCRIPT -->")
        elif "<!-- Script for Navigation" in content:
            content = content.replace("    </div>\n\n    <!-- Script for Navigation", contact_html + "\n    </div>\n\n    <!-- Script for Navigation")
            
    # Fix links
    content = content.replace('href="index.html#contact"', 'href="#contact"')
    
    with open(file, "w") as f:
        f.write(content)

