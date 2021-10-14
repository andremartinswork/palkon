import React from "react";

// STYED COMPONENTS
import styled from "styled-components";
import { colors } from "../../../styles/theme";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";
import Container from "../../atoms/container";

export default function Legal(props) {
  const { id, title, text } = props;

  return (
    <Section id={id}>
      <Top>
        <Space top="160" bottom="160">
          <Container lg>
            <Space top="40" bottom="40">
              <Text tag="h1" className="play-48" align="center">
                {title}
              </Text>
            </Space>
          </Container>
        </Space>
      </Top>
      <Container md>
        <Space top="160" bottom="160">
          <Text tag="p" className="roboto-16">
            This website is maintained by Palkon Capital Management, LLC
            (“Palkon”). None of the information or materials contained on or
            accessible through this website should be construed as providing any
            type of investment or other advice, nor should you consider such
            information or materials as a solicitation, recommendation,
            endorsement or offer to purchase or sell any financial security or
            other financial instrument. Past performance of Palkon or any of its
            affiliates, officers, directors, managers or employees is not an
            indication of future performance.
            <br /> <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Palkon makes every effort to use reliable information but does not
            make any representation to, and disclaims any liability with respect
            to, the accuracy, timeliness and/or completeness of the information
            contained herein. Palkon has no obligation to inform you when
            information contained herein changes or is updated. Palkon may have
            an interest in and may effect transactions in, securities and/or
            other financial instruments mentioned herein. The materials and
            information on this website are for informational purposes only and
            do not constitute financial, legal, tax or any other advice. Users
            must make their own investment decisions based on their own
            investment objectives and in light of their own financial position.
            Users must make their own investment decisions based on their own
            investment objectives and in light of their own financial position,
            Palkon recommends you and should seek advice from independent
            advisers as deemed necessary. This information contained on this
            website may not be sold or redistributed without the prior written
            consent of Palkon.
            <br /> <br /> <br />
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            Online Privacy
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Palkon Capital Management, LLC (“Palkon” or “us” or “we”) is
            committed to protecting the privacy of users of its website (the
            “Website”). We will use reasonable efforts to see that all
            information, identifying and otherwise, submitted to us by users,
            remains private and is used only for the purposes set forth. We
            believe our online users have a right to know what information we
            collect when you visit our Website. This Online Privacy Policy
            describes the types of information we gather about you, how we use
            such information, with whom we might share such information, and the
            means by which we keep the information secure. Please read this
            Online Privacy Policy carefully. By submitting information through
            this Website, you are deemed to have consented to the practices
            described in this Online Privacy Policy.
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            <br /> <br /> <br />
            Use of Cookies
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Cookies are small text files stored on a user’s hard drive after the
            user has visited and/or registered with an online site. [Pedro: Are
            we collecting cookies? I don’t think we are at the moment but let’s
            leave this in in case we want to in the future?] Changes to the
            Online Privacy Policy. If we ever change the Online Privacy Policy,
            we will post that information on this Privacy Policy page. We invite
            you to come back from time to time to review the policy.
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Links to Third Party Websites. The Website contains links to third
            party websites which, in some cases, may be incorporated into, and
            appear to be part of, the Website. However, once you have used these
            links to leave the Website, we cannot be responsible for the
            protection and privacy of any information which you provide while
            visiting such sites, and such sites are not governed by this Online
            Privacy Statement. Therefore, you should exercise caution and look
            at the privacy statement applicable to the website in question.
            Palkon disclaims any responsibility for the privacy policies and
            procedures of any third-party websites that you reach via a
            hyperlink contained on the Website.
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            If you have any questions about Palkon’s privacy practices or this
            Online Privacy Policy, please e-mail us at ir@palkoncap.com. Terms &
            Conditions. This website (the “Website”) is maintained by Palkon
            Capital Management, LLC (“Palkon” or “us” or “we”). Please read
            these Terms and Conditions of Use carefully. By accessing this
            Website, you signify your agreement with, and understanding of, the
            following Terms and Conditions of Use without modification of the
            terms, conditions, and notices contained herein.
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            No Offer of Securities – Disclosure of Interests. None of the
            information or materials contained on or accessible through this
            Website should be construed as providing any type of investment or
            other advice, nor should you consider such information or materials
            as a solicitation, recommendation, endorsement or offer to you to
            purchase or sell any securities or other instruments of Palkon or
            any other issuer. Offers may only be made where lawful under
            applicable law. If you wish to obtain further details about any
            information contained on this Website, we suggest that you contact
            the Palkon team at ir@palkoncap.com. Your Right to Use this Website
            and Its Contents. This Website is only for your personal use. The
            information and materials provided on this Website are solely for
            your use to assist you in evaluating the products and services
            offered by Palkon and in the support and use of such products. Other
            uses are not permitted unless you receive Palkon’s prior written
            approval. You may not distribute, exchange, modify, sell, re-post or
            transmit anything you copy from this Website, including but not
            limited to any text, images, audio and video, for any business,
            commercial or public purpose. As long as you comply with the terms
            of these Terms and Conditions of Use, Palkon grants you a
            non-exclusive, non-transferable, limited right to access and use
            this Website. We may revoke such right at any time. You agree not to
            interrupt or attempt to interrupt the operation of this Website in
            any way. This Website is operated by, or on behalf of, Palkon. Not
            all products and services (if any) listed on this Website are
            available in all jurisdictions. To the extent that access,
            distribution and/or use of this Website would be deemed illegal by
            applicable law in any regulatory jurisdiction then such access,
            distribution and/or use by you is prohibited.
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Responsibility for User’s Material. You are prohibited from posting
            or transmitting any defamatory, libelous, obscene, pornographic,
            profane, threatening or unlawful material or any material that could
            constitute or encourage conduct that would be considered a criminal
            offense or give rise to civil liability, or otherwise violate any
            law. Palkon will fully cooperate with any law enforcement
            authorities or court order requesting or directing Palkon to
            disclose the identity of anyone posting such materials.
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            <br /> <br /> <br />
            Transmitted Material
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Internet transmissions are never completely private or secure. You
            understand that any message or information you send through this
            Website may be read or intercepted by others unless there is a
            special notice that a particular message (for example, credit card
            information) is encrypted (sent in code). Sending a message to
            Palkon does not cause Palkon to have any special responsibility to
            you.
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            <br /> <br /> <br />
            Linked Sites
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            This Website may contain links to other Internet websites. Palkon
            provides such links for your convenience only, and is not
            responsible for the content of any website linked to or from this
            Website. Links from this Website to any other website do not mean
            that Palkon approves of, endorses or recommends that website. Palkon
            disclaims all warranties, express or implied, as to the accuracy,
            legality, reliability or validity of any content on any other
            website.
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            <br /> <br /> <br />
            Confidential Information
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            Except as may otherwise be provided for in our Online Privacy
            Policy, any material, information or other communication you
            transmit or post to this Website, including any data, questions,
            comments, suggestions, or the like is and will be treated as,
            non-confidential and non-proprietary (“Communications”). You
            authorize Palkon to use the Communications in any manner consistent
            with Palkon’s Online Privacy Policy as amended from time to time.
            Right to Change These Terms and Conditions of Use or Content on this
            Website. Palkon may add to, change or remove any part of these Terms
            and Conditions of Use at any time without notice. Any changes to
            these Terms and Conditions of Use or any terms posted on this
            Website apply as soon as they are posted. By continuing to use this
            Website after any changes are posted, you are indicating your
            acceptance of those changes. Palkon may add, change, discontinue,
            remove or suspend any other content posted on this Website, at any
            time, without notice and without liability.
            <br /> <br />
          </Text>

          <Text tag="p" className="roboto-16">
            Disclaimer of Warranties and Damages; Limitation of Liability.
            PALKON IS NOT RESPONSIBLE FOR ANY DAMAGES OR LOSSES RELATED TO THE
            USE OF THIS WEBSITE. YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK.
            THIS WEBSITE (INCLUDING ALL CONTENT AND FUNCTIONS MADE AVAILABLE ON
            OR ACCESSED THROUGH THIS WEBSITE) IS PROVIDED “AS IS.” TO THE
            FULLEST EXTENT PERMISSIBLE BY LAW, WITH REGARD TO THE CONTENT ON
            THIS WEBSITE, PALKON MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY
            KIND WHATSOEVER THAT THE SERVER THAT MAKES THIS WEBSITE AVAILABLE IS
            FREE OF VIRUSES OR OTHER COMPONENTS THAT MAY INFECT, HARM OR CAUSE
            DAMAGE TO YOUR COMPUTER EQUIPMENT OR ANY OTHER PROPERTY WHEN YOU
            ACCESS, BROWSE, DOWNLOAD FROM OR OTHERWISE USE THE WEBSITE. UNDER NO
            CIRCUMSTANCES, INCLUDING BUT NOT LIMITED TO PALKON’S NEGLIGENCE,
            SHALL PALKON BE LIABLE FOR ANY CONSEQUENTIAL, DIRECT, INCIDENTAL,
            INDIRECT, PUNITIVE OR SPECIAL DAMAGES RELATED TO (A) THE USE OF, (B)
            THE INABILITY TO USE OR (C) ERRORS OR OMISSIONS IN THE CONTENTS AND
            FUNCTIONS OF THIS WEBSITE, EVEN IF PALKON OR AN AUTHORIZED
            REPRESENTATIVE THEREOF HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
            CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION OR
            EXCLUSION MAY NOT APPLY TO YOU. IN NO EVENT SHALL PALKON’S TOTAL
            LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION
            (WHETHER IN CONTRACT OR TORT, INCLUDING, BUT NOT LIMITED TO,
            NEGLIGENCE OR OTHERWISE), EXCEED $100.00.
            <br /> <br />
          </Text>

          <Text tag="p" className="roboto-16">
            You are responsible for undertaking suitable precautions to scan for
            computer viruses and to maintain a backup of all data and/or
            equipment.
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            <br /> <br /> <br />
            Indemnity
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            You agree to indemnify, defend and hold harmless Palkon and its
            affiliated entities, and each of their respective owners, officers,
            directors, employees and agents from and against any and all claims,
            demands, losses, liabilities, damages, costs and expenses (including
            but not limited to attorney’s fees) arising from or in connection
            with: (i) your use of the Website and/or (ii) any violation of these
            Terms and Conditions of Use. You agree that your obligation to
            indemnify shall survive beyond any term that these Terms and
            Conditions of Use are in effect.
          </Text>

          <Text tag="h4" className="roboto-18" weight={400}>
            <br /> <br /> <br />
            General Provisions
            <br /> <br />
          </Text>
          <Text tag="p" className="roboto-16">
            These Terms and Conditions of Use and any additional terms posted on
            this Website together constitute the entire agreement between Palkon
            and you with respect to your use and access of this Website. Any
            cause of action you may have with respect to your use of this
            Website must be commenced within one (1) year after the claim or
            cause of action arises. If for any reason a court of competent
            jurisdiction finds any provision of these Terms and Conditions of
            Use, or portion thereof, to be unenforceable, that provision shall
            be enforced to the maximum extent permissible so as to effect the
            intent of this agreement, and the remainder of these Terms and
            Conditions of Use shall continue in full force and effect. These
            Terms and Conditions of Use shall be governed by and construed in
            accordance with the laws of the State of New York, United States of
            America, without reference to its conflict of laws rules
          </Text>
        </Space>
      </Container>
    </Section>
  );
}

const Top = styled.div`
  background-color: ${colors.c_F8FAFF};
`;
