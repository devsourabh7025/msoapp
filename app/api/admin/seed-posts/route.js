import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

// Next.js: Get env vars at runtime
function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Middleware to check if user is ADMIN
async function checkAdmin(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return { error: "Not authenticated", status: 401 };
  }

  try {
    await ensureConnected();
    const JWT_SECRET = getJWTSecret();
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || user.role !== "ADMIN") {
      return {
        error: "Unauthorized - Admin access required",
        status: 403,
      };
    }

    return { user };
  } catch (error) {
    return { error: "Not authenticated", status: 401 };
  }
}

// Seed 10 business-related posts
export async function POST(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();

    // Get or use the admin user as author
    const adminUser = authCheck.user;
    
    console.log(`📝 Starting to seed posts with admin user: ${adminUser.name} (ID: ${adminUser._id})`);
    
    if (!adminUser || !adminUser._id) {
      return NextResponse.json(
        { error: "Admin user not found or invalid" },
        { status: 400 }
      );
    }

    // Business-related dummy posts
    const dummyPosts = [
      {
        title: "10 Profitable Small Business Ideas for New Entrepreneurs in 2025",
        excerpt: "Discover the most promising small business opportunities that require minimal investment and offer high returns. Perfect for first-time entrepreneurs looking to start their journey.",
        content: `<h2>Introduction</h2>
<p>Starting a small business can be one of the most rewarding decisions you make. With the right idea and execution, you can build a sustainable income stream while doing something you're passionate about.</p>

<h2>1. E-commerce Store</h2>
<p>Online retail continues to grow exponentially. You can start with dropshipping or create your own product line. Focus on a niche market to stand out from competitors.</p>

<h2>2. Digital Marketing Agency</h2>
<p>Businesses always need help with their online presence. Offer services like social media management, SEO, content creation, and paid advertising.</p>

<h2>3. Online Tutoring</h2>
<p>Share your expertise by teaching others. Whether it's academic subjects, music, languages, or professional skills, online tutoring has huge demand.</p>

<h2>4. Freelance Writing</h2>
<p>Content is king in the digital age. If you have writing skills, you can work with businesses, blogs, and publications to create engaging content.</p>

<h2>5. Virtual Assistant Services</h2>
<p>Many businesses need help with administrative tasks. Offer services like email management, scheduling, data entry, and customer support.</p>

<h2>6. Social Media Management</h2>
<p>Help businesses grow their online presence by managing their social media accounts, creating content, and engaging with their audience.</p>

<h2>7. Graphic Design</h2>
<p>If you have design skills, offer logo creation, branding, web design, and marketing materials to businesses of all sizes.</p>

<h2>8. Home Cleaning Service</h2>
<p>There's always demand for cleaning services. Start with residential cleaning and expand to commercial clients as you grow.</p>

<h2>9. Personal Fitness Training</h2>
<p>With health consciousness on the rise, personal training services are in high demand. Offer both in-person and online training sessions.</p>

<h2>10. Food Delivery Service</h2>
<p>Start a local food delivery service or create a meal prep business. Focus on healthy options or specific dietary needs.</p>

<h2>Conclusion</h2>
<p>These business ideas require minimal startup capital and can be scaled as you grow. Choose one that aligns with your skills, interests, and market demand in your area.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "How to Write a Business Plan That Gets Funding",
        excerpt: "Learn the essential components of a winning business plan that investors and lenders want to see. Includes templates and real-world examples.",
        content: `<h2>Why a Business Plan Matters</h2>
<p>A well-written business plan is crucial for securing funding, attracting investors, and guiding your business growth. It serves as a roadmap for your entrepreneurial journey.</p>

<h2>Executive Summary</h2>
<p>This is the most important section. It should be concise, compelling, and summarize your entire business plan in one page. Include your mission, products/services, target market, and financial highlights.</p>

<h2>Company Description</h2>
<p>Provide detailed information about your company, including legal structure, location, history, and unique value proposition. Explain what makes your business different from competitors.</p>

<h2>Market Analysis</h2>
<p>Conduct thorough research on your industry, target market, and competitors. Include market size, growth trends, customer demographics, and competitive landscape.</p>

<h2>Organization and Management</h2>
<p>Outline your organizational structure, key team members, and their roles. Include resumes or backgrounds of key personnel to show you have the right team.</p>

<h2>Products or Services</h2>
<p>Describe your products or services in detail. Explain how they solve customer problems, their unique features, and your pricing strategy.</p>

<h2>Marketing and Sales Strategy</h2>
<p>Detail how you plan to attract and retain customers. Include your marketing channels, sales process, customer acquisition cost, and customer lifetime value.</p>

<h2>Financial Projections</h2>
<p>Provide realistic financial forecasts including income statements, cash flow projections, and balance sheets for at least three years. Include assumptions and explain your numbers.</p>

<h2>Funding Request</h2>
<p>If you're seeking funding, clearly state how much you need, how you'll use it, and what type of funding you're seeking (loan, equity, etc.).</p>

<h2>Conclusion</h2>
<p>A comprehensive business plan demonstrates your commitment and understanding of your business. Keep it updated as your business evolves.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "5 Essential Marketing Strategies for Small Businesses",
        excerpt: "Discover cost-effective marketing strategies that deliver results without breaking the bank. Perfect for small businesses with limited budgets.",
        content: `<h2>Introduction</h2>
<p>Marketing doesn't have to be expensive. With the right strategies, small businesses can compete effectively and grow their customer base without a huge budget.</p>

<h2>1. Content Marketing</h2>
<p>Create valuable content that educates and engages your target audience. Blog posts, videos, infographics, and podcasts can establish you as an industry expert and drive organic traffic.</p>

<h2>2. Social Media Marketing</h2>
<p>Leverage free social media platforms to connect with your audience. Focus on platforms where your customers are most active. Consistency and engagement are key.</p>

<h2>3. Email Marketing</h2>
<p>Build an email list and nurture relationships with your customers. Send regular newsletters, promotions, and valuable content. Email marketing has one of the highest ROI of all marketing channels.</p>

<h2>4. Local SEO</h2>
<p>Optimize your online presence for local searches. Claim your Google Business Profile, get listed in local directories, and encourage customer reviews.</p>

<h2>5. Referral Programs</h2>
<p>Encourage your existing customers to refer new ones. Offer incentives like discounts or rewards for successful referrals. Word-of-mouth is powerful and cost-effective.</p>

<h2>Measuring Success</h2>
<p>Track your marketing efforts to understand what's working. Use analytics tools to measure website traffic, social media engagement, email open rates, and conversion rates.</p>

<h2>Conclusion</h2>
<p>Effective marketing is about consistency and understanding your audience. Start with one or two strategies, master them, then expand to others.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "Understanding Cash Flow: The Lifeblood of Your Business",
        excerpt: "Learn how to manage cash flow effectively to keep your business healthy and growing. Includes practical tips and common pitfalls to avoid.",
        content: `<h2>What is Cash Flow?</h2>
<p>Cash flow is the movement of money in and out of your business. Positive cash flow means more money coming in than going out, which is essential for business survival.</p>

<h2>Why Cash Flow Matters</h2>
<p>Even profitable businesses can fail if they run out of cash. Understanding and managing cash flow is crucial for making informed business decisions and avoiding financial crises.</p>

<h2>Types of Cash Flow</h2>
<p><strong>Operating Cash Flow:</strong> Money from day-to-day business operations.</p>
<p><strong>Investing Cash Flow:</strong> Money from buying or selling assets.</p>
<p><strong>Financing Cash Flow:</strong> Money from loans, investments, or dividends.</p>

<h2>Improving Cash Flow</h2>
<p>1. Invoice promptly and follow up on payments</p>
<p>2. Negotiate better payment terms with suppliers</p>
<p>3. Manage inventory efficiently</p>
<p>4. Offer discounts for early payments</p>
<p>5. Consider invoice factoring for immediate cash</p>

<h2>Cash Flow Forecasting</h2>
<p>Create monthly cash flow forecasts to predict future cash positions. This helps you plan for slow periods and make informed decisions about expenses and investments.</p>

<h2>Common Cash Flow Mistakes</h2>
<p>Avoid these pitfalls: not tracking cash flow regularly, confusing profit with cash flow, poor accounts receivable management, and over-investing in inventory.</p>

<h2>Tools and Resources</h2>
<p>Use accounting software to track cash flow automatically. Regular financial reviews and working with an accountant can help you stay on top of your cash flow.</p>

<h2>Conclusion</h2>
<p>Mastering cash flow management is essential for business success. Regular monitoring and proactive management will keep your business financially healthy.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "Building a Strong Brand Identity for Your Business",
        excerpt: "Discover how to create a memorable brand that resonates with your target audience and sets you apart from competitors.",
        content: `<h2>What is Brand Identity?</h2>
<p>Brand identity is how your business presents itself to the world. It includes your logo, colors, typography, messaging, and overall visual and verbal communication.</p>

<h2>Why Brand Identity Matters</h2>
<p>A strong brand identity helps customers recognize and remember your business. It builds trust, creates emotional connections, and differentiates you from competitors.</p>

<h2>Key Elements of Brand Identity</h2>
<p><strong>Logo:</strong> Your visual symbol that represents your business</p>
<p><strong>Color Palette:</strong> Colors that evoke the right emotions</p>
<p><strong>Typography:</strong> Fonts that reflect your brand personality</p>
<p><strong>Voice and Tone:</strong> How you communicate with your audience</p>
<p><strong>Brand Values:</strong> What your business stands for</p>

<h2>Defining Your Brand</h2>
<p>Start by understanding your target audience, your unique value proposition, and your brand personality. Are you professional, friendly, innovative, or traditional?</p>

<h2>Creating Visual Elements</h2>
<p>Work with a designer to create a cohesive visual identity. Ensure your logo, colors, and fonts work well across all platforms - website, social media, print materials, and packaging.</p>

<h2>Consistency is Key</h2>
<p>Use your brand elements consistently across all touchpoints. This builds recognition and reinforces your brand message. Create brand guidelines to maintain consistency.</p>

<h2>Evolving Your Brand</h2>
<p>While consistency is important, brands can evolve over time. Update your brand identity as your business grows, but maintain core elements that customers recognize.</p>

<h2>Conclusion</h2>
<p>A strong brand identity is an investment in your business's future. It helps build customer loyalty and makes your business more memorable in a crowded marketplace.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "Customer Retention Strategies That Actually Work",
        excerpt: "Learn proven strategies to keep your customers coming back. Discover how to build loyalty and increase customer lifetime value.",
        content: `<h2>Why Customer Retention Matters</h2>
<p>Acquiring new customers costs 5-25 times more than retaining existing ones. Loyal customers also spend more and refer others, making retention crucial for profitability.</p>

<h2>1. Exceptional Customer Service</h2>
<p>Provide outstanding service at every touchpoint. Respond quickly, solve problems effectively, and go above and beyond to exceed expectations. Happy customers become loyal customers.</p>

<h2>2. Loyalty Programs</h2>
<p>Reward customers for their repeat business. Points systems, discounts, exclusive offers, and VIP programs encourage customers to choose you over competitors.</p>

<h2>3. Personalization</h2>
<p>Use customer data to personalize experiences. Send targeted offers, remember preferences, and make recommendations based on past purchases. Personalization shows you care.</p>

<h2>4. Regular Communication</h2>
<p>Stay in touch with customers through newsletters, social media, and email campaigns. Share valuable content, updates, and exclusive offers to keep your brand top-of-mind.</p>

<h2>5. Ask for Feedback</h2>
<p>Regularly seek customer feedback through surveys, reviews, and direct conversations. Act on their suggestions to show you value their input and are committed to improvement.</p>

<h2>6. Create a Community</h2>
<p>Build a community around your brand through social media groups, forums, or events. Engaged communities create emotional connections and increase loyalty.</p>

<h2>7. Surprise and Delight</h2>
<p>Occasionally surprise customers with unexpected perks - free samples, birthday discounts, or thank-you notes. These gestures create positive memories and strengthen relationships.</p>

<h2>Measuring Retention</h2>
<p>Track metrics like customer retention rate, repeat purchase rate, and customer lifetime value. These metrics help you understand how well your retention strategies are working.</p>

<h2>Conclusion</h2>
<p>Customer retention is about building relationships, not just transactions. Focus on creating value and positive experiences to keep customers coming back.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "Digital Transformation: How Small Businesses Can Compete Online",
        excerpt: "Discover how small businesses can leverage digital tools and strategies to compete with larger companies and reach new customers.",
        content: `<h2>What is Digital Transformation?</h2>
<p>Digital transformation involves using technology to improve business processes, enhance customer experiences, and create new business models. It's essential for staying competitive in today's market.</p>

<h2>Why It Matters for Small Businesses</h2>
<p>Digital tools level the playing field, allowing small businesses to compete with larger companies. Online presence, automation, and data analytics can significantly improve efficiency and reach.</p>

<h2>Key Areas for Digital Transformation</h2>
<p><strong>E-commerce:</strong> Sell products or services online to reach customers beyond your local area.</p>
<p><strong>Digital Marketing:</strong> Use online channels to attract and engage customers cost-effectively.</p>
<p><strong>Automation:</strong> Automate repetitive tasks to save time and reduce errors.</p>
<p><strong>Data Analytics:</strong> Use data to make informed decisions and understand customer behavior.</p>

<h2>Getting Started</h2>
<p>1. Build a professional website</p>
<p>2. Establish social media presence</p>
<p>3. Implement cloud-based tools</p>
<p>4. Set up online payment systems</p>
<p>5. Use customer relationship management (CRM) software</p>

<h2>Overcoming Challenges</h2>
<p>Small businesses often face budget constraints and limited technical expertise. Start with free or low-cost tools, focus on high-impact areas, and consider hiring freelancers for specialized tasks.</p>

<h2>Measuring Success</h2>
<p>Track key metrics like website traffic, online sales, social media engagement, and customer acquisition costs. Use analytics to understand what's working and adjust your strategy.</p>

<h2>Staying Updated</h2>
<p>Technology evolves rapidly. Stay informed about new tools and trends. Attend webinars, read industry blogs, and network with other business owners to learn from their experiences.</p>

<h2>Conclusion</h2>
<p>Digital transformation is not optional - it's essential for survival and growth. Start small, focus on high-impact changes, and gradually expand your digital capabilities.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "The Art of Negotiation: Essential Skills for Business Success",
        excerpt: "Master negotiation techniques that will help you close better deals, build stronger relationships, and achieve your business goals.",
        content: `<h2>Why Negotiation Skills Matter</h2>
<p>Negotiation is a fundamental business skill. Whether you're dealing with suppliers, customers, employees, or partners, strong negotiation skills can significantly impact your bottom line.</p>

<h2>Preparation is Key</h2>
<p>Before any negotiation, research thoroughly. Understand the other party's needs, constraints, and alternatives. Know your own goals, limits, and best alternative to a negotiated agreement (BATNA).</p>

<h2>Building Rapport</h2>
<p>Establish a positive relationship with the other party. People are more likely to make concessions to someone they like and trust. Find common ground and show genuine interest.</p>

<h2>Active Listening</h2>
<p>Listen more than you talk. Pay attention to what the other party is saying and what they're not saying. Ask clarifying questions to understand their true needs and concerns.</p>

<h2>Creating Value</h2>
<p>Focus on creating win-win solutions rather than just getting what you want. Look for ways to expand the pie before dividing it. Creative solutions often lead to better outcomes for both parties.</p>

<h2>Managing Emotions</h2>
<p>Stay calm and professional, even when negotiations get tense. Emotional reactions can derail negotiations and damage relationships. Take breaks if needed to maintain composure.</p>

<h2>Knowing When to Walk Away</h2>
<p>Not every deal is worth making. Know your limits and be willing to walk away if the terms don't meet your minimum requirements. Sometimes the best negotiation is the one you don't make.</p>

<h2>Common Negotiation Mistakes</h2>
<p>Avoid these pitfalls: being too aggressive, not preparing adequately, talking too much, making the first offer without information, and taking things personally.</p>

<h2>Practice Makes Perfect</h2>
<p>Negotiation is a skill that improves with practice. Start with low-stakes situations and gradually work up to more important negotiations. Learn from each experience.</p>

<h2>Conclusion</h2>
<p>Effective negotiation is about finding solutions that work for everyone. With preparation, practice, and the right mindset, you can become a skilled negotiator.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "Time Management Strategies for Busy Entrepreneurs",
        excerpt: "Discover proven techniques to maximize productivity, reduce stress, and achieve more in less time. Perfect for busy business owners.",
        content: `<h2>The Entrepreneur's Time Challenge</h2>
<p>Entrepreneurs wear many hats and face constant demands on their time. Effective time management is crucial for maintaining work-life balance and achieving business goals.</p>

<h2>1. Prioritize with the Eisenhower Matrix</h2>
<p>Categorize tasks into four quadrants: urgent and important, important but not urgent, urgent but not important, and neither. Focus on important tasks, not just urgent ones.</p>

<h2>2. Use Time Blocking</h2>
<p>Schedule specific blocks of time for different activities. Dedicate focused time to important tasks, and batch similar activities together to maintain momentum.</p>

<h2>3. Eliminate Time Wasters</h2>
<p>Identify and eliminate activities that don't contribute to your goals. Limit social media, unnecessary meetings, and other distractions that eat up your time.</p>

<h2>4. Delegate Effectively</h2>
<p>You can't do everything yourself. Delegate tasks that others can do, freeing up your time for high-value activities that only you can handle.</p>

<h2>5. Set Boundaries</h2>
<p>Learn to say no to requests that don't align with your priorities. Protect your time and energy for activities that move your business forward.</p>

<h2>6. Use Technology Wisely</h2>
<p>Leverage productivity tools like project management software, automation, and apps that help you stay organized and efficient. But don't let technology become a distraction.</p>

<h2>7. Take Regular Breaks</h2>
<p>Working non-stop leads to burnout and decreased productivity. Schedule regular breaks to recharge. The Pomodoro Technique (25 minutes work, 5 minutes break) can be effective.</p>

<h2>8. Plan Your Day</h2>
<p>Start each day by planning your top priorities. Review your schedule, identify must-do tasks, and allocate time accordingly. End the day by planning for tomorrow.</p>

<h2>9. Focus on One Thing at a Time</h2>
<p>Multitasking reduces efficiency and quality. Focus on one task at a time, complete it, then move to the next. You'll accomplish more with better results.</p>

<h2>10. Review and Adjust</h2>
<p>Regularly review how you're spending your time. Identify patterns, eliminate inefficiencies, and adjust your strategies to continuously improve your time management.</p>

<h2>Conclusion</h2>
<p>Time is your most valuable resource. By managing it effectively, you can achieve more, reduce stress, and create a better work-life balance.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
      {
        title: "Scaling Your Business: Growth Strategies That Work",
        excerpt: "Learn how to scale your business sustainably without sacrificing quality or burning out. Includes practical frameworks and real-world examples.",
        content: `<h2>What is Business Scaling?</h2>
<p>Scaling means growing your business in a way that increases revenue faster than costs. It's about working smarter, not just harder, to achieve sustainable growth.</p>

<h2>When to Scale</h2>
<p>Scale when you have: consistent revenue, proven demand, efficient operations, and the right team. Premature scaling can be as dangerous as not scaling at all.</p>

<h2>1. Systematize Your Operations</h2>
<p>Document your processes and create systems that can run without your constant involvement. This allows you to delegate effectively and maintain quality as you grow.</p>

<h2>2. Build a Strong Team</h2>
<p>Hire people who are better than you in their areas of expertise. Invest in training and create a culture that attracts and retains top talent.</p>

<h2>3. Leverage Technology</h2>
<p>Use technology to automate repetitive tasks, improve efficiency, and scale your operations. CRM systems, automation tools, and cloud-based solutions can handle growth.</p>

<h2>4. Focus on Customer Acquisition</h2>
<p>Develop scalable marketing channels that can grow with your business. Invest in strategies that have a positive return on investment and can be scaled up.</p>

<h2>5. Diversify Revenue Streams</h2>
<p>Don't rely on a single product or service. Develop multiple revenue streams to reduce risk and create more opportunities for growth.</p>

<h2>6. Maintain Quality</h2>
<p>As you scale, maintain the quality that made you successful. Don't sacrifice customer experience or product quality for speed of growth.</p>

<h2>7. Manage Cash Flow</h2>
<p>Growth requires capital. Plan for increased expenses, manage cash flow carefully, and secure funding if needed to support your growth plans.</p>

<h2>8. Stay Customer-Focused</h2>
<p>As you grow, stay connected to your customers. Their feedback is crucial for making the right decisions and maintaining your competitive advantage.</p>

<h2>Common Scaling Mistakes</h2>
<p>Avoid these pitfalls: scaling too fast, hiring too quickly, losing focus on core business, ignoring cash flow, and sacrificing quality for speed.</p>

<h2>Measuring Growth</h2>
<p>Track key metrics like revenue growth rate, customer acquisition cost, customer lifetime value, and profit margins. These metrics help you understand if you're scaling effectively.</p>

<h2>Conclusion</h2>
<p>Scaling is a marathon, not a sprint. Focus on sustainable growth, maintain quality, and build systems that can support your expansion.</p>`,
        category: "Business",
        status: "published",
        featuredImage: "/demo.png",
      },
    ];

    // Create posts
    const createdPosts = [];
    for (const postData of dummyPosts) {
      // Generate slug from title
      let slug = postData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      // Check if slug already exists
      let slugExists = true;
      let slugCounter = 1;
      let finalSlug = slug;
      
      while (slugExists) {
        const existingPost = await Post.findOne({ slug: finalSlug });
        if (!existingPost) {
          slugExists = false;
        } else {
          finalSlug = `${slug}-${slugCounter}`;
          slugCounter++;
        }
      }

      try {
        const postDataToSave = {
          title: postData.title,
          slug: finalSlug,
          excerpt: postData.excerpt || "",
          content: postData.content || "",
          category: postData.category,
          status: postData.status,
          featuredImage: postData.featuredImage || "/demo.png",
          author: adminUser._id,
          publishedAt: postData.status === "published" ? new Date() : undefined,
          contentBlocks: [{ type: "text", content: postData.content }],
          seo: {
            metaTitle: postData.title,
            metaDescription: postData.excerpt,
            ogTitle: postData.title,
            ogDescription: postData.excerpt,
            twitterCard: "summary_large_image",
          },
        };

        console.log(`Creating post: "${postData.title}" with slug: ${finalSlug}`);
        const post = await Post.create(postDataToSave);

        // Populate author for response
        await post.populate("author", "name email");
        
        // Convert to plain object for response
        const postObj = post.toObject ? post.toObject() : post;
        createdPosts.push(postObj);
        
        console.log(`✅ Created post: ${post.title} (ID: ${post._id}, Slug: ${post.slug})`);
      } catch (postError) {
        console.error(`❌ Error creating post "${postData.title}":`, postError);
        console.error("Post error details:", {
          name: postError.name,
          message: postError.message,
          code: postError.code,
          errors: postError.errors,
          stack: postError.stack,
        });
        // Continue with next post instead of failing completely
      }
    }

    console.log(`✅ Successfully created ${createdPosts.length} out of ${dummyPosts.length} posts`);
    
    // Verify posts were actually saved to database
    if (createdPosts.length > 0) {
      const savedPostIds = createdPosts.map(p => p._id || p.id).filter(Boolean);
      if (savedPostIds.length > 0) {
        const verifyPosts = await Post.find({ _id: { $in: savedPostIds } }).select("_id title slug status");
        console.log(`✅ Verified ${verifyPosts.length} posts in database`);
      }
    }
    
    if (createdPosts.length === 0) {
      return NextResponse.json(
        { 
          error: "No posts were created. Check server logs for details.",
          attempted: dummyPosts.length,
          created: 0
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: `Successfully created ${createdPosts.length} business posts`,
      posts: createdPosts.map(p => ({
        _id: p._id || p.id,
        title: p.title,
        slug: p.slug,
        status: p.status,
        category: p.category,
      })),
      attempted: dummyPosts.length,
      created: createdPosts.length,
    });
  } catch (error) {
    console.error("❌ Error seeding posts:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      code: error.code,
    });
    return NextResponse.json(
      { 
        error: "Failed to seed posts", 
        details: error.message,
        errorName: error.name,
      },
      { status: 500 }
    );
  }
}
